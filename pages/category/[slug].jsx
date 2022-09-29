import Link from "next/link";
import React, { useEffect, useState } from "react";
import CategoryHeader from "../../components/category/CategoryHeader";
import CategoryProducts from "../../components/category/CategoryProducts";
import { client } from "../../lib/client";
import { useRouter } from "next/router";
import CategoryProduct from "../../components/category/CategoryProduct";

const Category = ({ slug, products, categories }) => {
  const [isLoading, setIsLoading] = useState(true);
  let skeletonArr = Array(8).fill(0);
  const router = useRouter();

  const handleCategoryChange = (categoryChosen) => {
    setIsLoading(true);
    router.push({
      pathname: `/category/${categoryChosen.toLowerCase()}`,
    });
    // setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [products]);
  return (
    <>
      {/* <CategoryHeader categoryName={slug} categories={categories} /> */}

      <div className="container">
        <div className="category-header">
          <div className="category-header-left">
            <Link href={slug === "all" ? `/` : `/category/all`}>
              <div className="category-header-previous">
                <span>&#60;</span> {slug === "all" ? `Home` : `All Products`}
              </div>
            </Link>
          </div>
          <div className="category-header-center">
            <h2 className="category-title">{slug.toUpperCase()}</h2>
          </div>
          <div className="category-header-right">
            <select
              defaultValue={slug.toLowerCase()}
              onChange={(e) => {
                handleCategoryChange(e.target.value);
              }}
              name="category"
              id="select-category"
            >
              <option value="all">All</option>

              {categories?.map((category) => (
                <option key={category._id} value={category.categoryName}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* <div className="categories-filter">
          <span>SORT BY: </span>
          <span>Price</span>
          <span className="filter-select-item">
            <select
              defaultValue={"Ascending"}
              onChange={(e) => {
                handlePriceSort(e.target.value);
              }}
              className="filter-select"
            >
              <option value="Descending">Decsending</option>
              <option value="Ascending">Ascending</option>
            </select>
          </span>
        </div> */}
      </div>

      {/* <CategoryProducts loadingStat={isLoading} products={products} /> */}
      <div className="container">
        <div className="category-products">
          {isLoading ? (
            <>
              {skeletonArr.map((skeleton, i) => (
                <div key={i} className="skeleton">
                  <div className="skeleton-img"></div>
                  <div className="skeleton-title"></div>
                  <div className="skeleton-price"></div>
                </div>
              ))}
            </>
          ) : (
            <>
              {products.map((product) => (
                <CategoryProduct
                  key={product._rev}
                  property={product.isWide ? "wide" : "normal"}
                  productDetails={product}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
export const getStaticPaths = async () => {
  const categoriesQuery = `*[_type == "category"]{
    categoryName
  }`;
  const categories = await client.fetch(categoriesQuery);

  let categoriesLowerCase = [];
  categories.forEach((category) => {
    categoriesLowerCase.push(category.categoryName.toLowerCase());
  });

  const paths = categoriesLowerCase.map((category) => ({
    params: {
      slug: category,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const categoriesQuery = `*[_type == 'category']
  {
    _id,
    categoryName
  }`;

  const categories = await client.fetch(categoriesQuery);

  const categoryFound = categories.find(
    (category) => category.categoryName.toLowerCase() === slug
  );

  if (categoryFound === "undefined" && slug != "all") {
    return {
      notFound: true,
    };
  }

  let products;
  if (slug === "all") {
    const productsQuery = `*[_type == "product"]`;
    products = await client.fetch(productsQuery);
  }
  if (categoryFound != "undefined" && slug != "all") {
    const productsQuery = `*[_type == "product" && references('${categoryFound._id}')]`;
    products = await client.fetch(productsQuery);
  }

  return {
    props: { slug, products, categories, categoryFound },
  };
};
