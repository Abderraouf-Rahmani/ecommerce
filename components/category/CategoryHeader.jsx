import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const CategoryHeader = ({ categoryName, categories }) => {
  const router = useRouter();
  const handleCategoryChange = (categoryChosen) => {
    console.log(categoryChosen);
    // window.location.replace(`/category/${categoryChosen.toLowerCase()}`);
    router.push({
      pathname: `/category/${categoryChosen.toLowerCase()}`,
      // query: {
      //   postId,
      //   param
      // }
    });
  };

  const handlePriceSort = (priceSorting) => {
    console.log(priceSorting);
  };
  return (
    <div className="container">
      <div className="category-header">
        <div className="category-header-left">
          <Link href="/">
            <div>
              <span>&#60;</span> All Categories
            </div>
          </Link>
        </div>
        <div className="category-header-center">
          <h2 className="category-title">{categoryName.toUpperCase()}</h2>
        </div>
        <div className="category-header-right">
          <select
            defaultValue={categoryName.toLowerCase()}
            onChange={(e) => {
              handleCategoryChange(e.target.value);
            }}
            name="category"
            id="select-category"
          >
            <option value="all">All</option>

            {categories?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="categories-filter">
        <span>SORT BY: </span>
        <span>Popularity</span>
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
      </div>
    </div>
  );
};

export default CategoryHeader;
