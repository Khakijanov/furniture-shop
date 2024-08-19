import React, { useState } from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";

function OurProducts() {
  // Range value uchun state yaratamiz
  const [rangeValue, setRangeValue] = useState(40);

  // Range inputining o'zgarish hodisasini kuzatib borish uchun handler funksiyasi
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div>
      <Filter />
      <div className="Mycontainer">
        <Products />
      </div>
    </div>
  );
}

export default OurProducts;
