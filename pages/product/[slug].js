import React from "react";
import Product from "../../components/product/Product";
import Trending from "../../components/trending/Trending";
import { client } from "../../lib/client";

const ProductPage = ({ product, products }) => {
  return (
    <>
      <Product product={product.result[0]} />
      <Trending title="Peaple Also Viewed" trendProducts={products?.result} />
    </>
  );
};

export default ProductPage;

export const getStaticPaths = async () => {
  // const productsQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%5D%7B%0A%20%20slug%7B%0A%20%20current%0A%7D%0A%7D`;

  const query = `*[type == 'product']{
    slug {
      current
    }
  }`;

  // const productsSlug = await fetch(productsQueryUrl).then((res) => res.json());
  const productsSlug = await client.fetch(query);

  const paths = await productsSlug.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const productQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20slug.current%20%3D%3D%20'${slug}'%5D`;
  const product = await fetch(productQueryUrl).then((res) => res.json());

  const category_id = await product.result[0].productCategory._ref;
  const productsQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20references('${category_id}')%5D`;
  const products = await fetch(productsQueryUrl).then((res) => res.json());
  return {
    props: { product, products },
  };
};
