// react
import { useEffect, useState } from "react";
// components
import SingleCard from "./SingleCard";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts } from "../features/ProductSlice";

function Products() {
  const { allProducts } = useSelector((state) => state.order);
  console.log(allProducts);

  const dispatch = useDispatch();

  const [visibleProducts, setVisibleProducts] = useState(3); // Dastlab 3 ta mahsulotni ko'rsatamiz

  useEffect(() => {
    fetch("https://json-api.uz/api/project/furniture-shop/products")
      .then((data) => data.json())
      .then((products) => dispatch(addAllProducts(products.data)));
  }, []);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 3);
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <h1 className="capitalize text-[35px]">featured products</h1>
        <div className="w-full h-[1px] bg-secondary-content "></div>
      </div>
      <div className="flex items-center w-full justify-between flex-wrap">
        {allProducts.slice(0, visibleProducts).map((item) => (
          <SingleCard key={item.id} item={item} />
        ))}
        {visibleProducts < allProducts.length && (
          <button
            onClick={showMoreProducts}
            className="btn bg-secondary-content text-base-200 font-bold  hover:text-base-content"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default Products;
