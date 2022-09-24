import React from "react";
import CategoryHeader from "../../components/category/CategoryHeader";
import CategoryProducts from "../../components/category/CategoryProducts";

const Category = ({ pageSlug, products, categoriesArr }) => {
  return (
    <>
      <CategoryHeader categoryName={pageSlug} categories={categoriesArr} />
      <CategoryProducts products={products.result} />
    </>
  );
};

export default Category;

// export const getStaticPaths = async () => {
//   const categoriesQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22category%22%5D%20%7B%0A%20%20categoryName%2C%0A%20%20_id%0A%7D`;
//   const categories = await fetch(categoriesQueryUrl).then((res) => res.json());

//   const paths = categories?.result.map((category) => ({
//     params: {
//       slug: category.categoryName,
//     },
//   }));

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const categoriesQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22category%22%5D%20%7B%0A%20%20categoryName%2C%0A%20%20_id%0A%7D`;
  const categories = await fetch(categoriesQueryUrl).then((res) => res.json());
  let categoriesArr = [];
  let categoryFound;
  let category_id;
  categories?.result.forEach((categoryObj, i) => {
    categoriesArr.push(categoryObj.categoryName.toLowerCase());
    if (categoryObj.categoryName.toLowerCase() === pageSlug) {
      category_id = categoryObj._id;
    }
  });
  if (!categoriesArr.includes(pageSlug) && pageSlug !== "all") {
    return {
      notFound: true,
    };
  } else {
    categoryFound = true;
  }

  let products;
  if (pageSlug === "all") {
    const productsQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%5D`;
    products = await fetch(productsQueryUrl).then((res) => res.json());
  }
  if (categoryFound && pageSlug !== "all") {
    const productsQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20references('${category_id}')%5D`;
    products = await fetch(productsQueryUrl).then((res) => res.json());
  }

  return {
    props: { pageSlug, products, categoriesArr },
  };
};
