import Link from "next/link";
import React from "react";

const CategoryHeader = ({ categoryName }) => {
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
          <select name="category" id="select-category">
            <option value="kitchen" selected>
              Category
            </option>
            <option value="kitchen">kitchen</option>
            <option value="Home Electronics">Home Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Bed Room">Bed Room</option>
            <option value="Living Room">Living Room</option>
          </select>
        </div>
      </div>
      <div className="categories-filter">
        <span>SORT BY: </span>
        <span>Popularity</span>
        <span className="filter-select-item">
          <select className="filter-select">
            <option value="Price" selected>
              Price
            </option>
            <option value="Descending">Decsending</option>
            <option value="Ascending">Ascending</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default CategoryHeader;
