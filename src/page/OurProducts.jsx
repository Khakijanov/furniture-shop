import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";
import { useSelector } from "react-redux";

function OurProducts() {
  const { allProducts } = useSelector((state) => state.order);

  // allProducts'dagi barcha arraylarni bitta arrayga birlashtiramiz
  const allProductsFlattened = allProducts.flat();
  console.log(allProducts);
  console.log(allProductsFlattened);

  const [filteredProducts, setFilteredProducts] =
    useState(allProductsFlattened);

  const handleFilterChange = (filters) => {
    console.log(filters);
    let filtered = allProductsFlattened;

    // Search bo'yicha filter
    if (filters.searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    // Category bo'yicha filter
    if (filters.category !== "all") {
      filtered = filtered.filter((product) => {
        console.log(product);
        product.category &&
          product.attributes.category.toLowerCase() ===
            filters.category.toLowerCase();
      });
    }

    // Company bo'yicha filter
    if (filters.company !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.company &&
          product.company.toLowerCase() === filters.company.toLowerCase()
      );
    }

    // Price range bo'yicha filter
    filtered = filtered.filter(
      (product) => product.price <= filters.rangeValue
    );

    // Free shipping bo'yicha filter
    if (filters.freeShipping) {
      filtered = filtered.filter((product) => product.freeShipping === true);
    }

    // Sort bo'yicha filter
    if (filters.sort === "low") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sort === "a-z") {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sort === "z-a") {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <div className="Mycontainer">
        <Products products={filteredProducts} />
      </div>
    </div>
  );
}

export default OurProducts;
