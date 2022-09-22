import React from "react";
import CategoryHeader from "../../components/category/CategoryHeader";
import CategoryProducts from "../../components/category/CategoryProducts";

const brows = ({ pageSlug, products, allProducts }) => {
  return (
    <>
      {/* {console.log(products)} */}
      <CategoryHeader categoryName={pageSlug || "all Categories"} />
      <CategoryProducts
        products={products ? products?.result : allProducts.result}
      />
    </>
  );
};

export default brows;

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (pageSlug === "all") {
    const allProductsQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%5D`;
    const allProducts = await fetch(allProductsQueryUrl).then((res) =>
      res.json()
    );
    return {
      props: { allProducts },
    };
  }

  const categoriesQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22category%22%5D%20%7B%0A%20%20categoryName%2C%0A%20%20_id%0A%7D`;

  const categories = await fetch(categoriesQueryUrl).then((res) => res.json());
  let foundCategory;
  let categoryIndex;
  categories?.result.forEach((categoryObj, i) => {
    if (categoryObj.categoryName.toLowerCase() === pageSlug) {
      foundCategory = true;
      categoryIndex = i;
    }
  });
  if (!foundCategory) {
    return {
      notFound: true,
    };
  }

  const productsQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20references('${categories?.result[categoryIndex]?._id}')%5D%20%7B%0A%20%20name%2C%0A%20%20image%2C%0A%20%20price%0A%7D`;
  const products = await fetch(productsQueryUrl).then((res) => res.json());

  return {
    props: { pageSlug, products },
  };
};
