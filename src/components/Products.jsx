import { useEffect, useState } from "react";
// components
import SingleCard from "./SingleCard";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts } from "../features/ProductSlice";

function Products() {
  const { allProducts } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1); // Joriy sahifa
  const productsPerPage = 3; // Har bir sahifada nechta mahsulot ko'rsatilishini belgilash

  useEffect(() => {
    fetch("https://json-api.uz/api/project/furniture-shop/products")
      .then((data) => data.json())
      .then((products) => dispatch(addAllProducts(products.data)));
  }, [dispatch]);

  // Sahifa o'zgarganda ko'rsatiladigan mahsulotlarni hisoblash
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full">
      <div className="w-full">
        <h1 className="capitalize text-[35px]">featured products</h1>
        <div className="w-full h-[1px] bg-secondary-content "></div>
      </div>
      <div className="flex items-center w-full justify-between flex-wrap">
        {currentProducts.map((item) => (
          <SingleCard key={item.id} item={item} />
        ))}
      </div>
      <div className="pagination flex gap-1 justify-center mt-5">
        <button
          onClick={() => paginate(currentPage - 1)}
          className={`btn btn-outline text-base-content ${
            currentPage === 1 ? "disabled" : ""
          }`}
          disabled={currentPage === 1}
        >
          PREV
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`btn ${
              currentPage === index + 1 ? "bg-primary text-black " : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          className={`btn ${
            currentPage === totalPages ? "disabled" : "btn-outline"
          }`}
          disabled={currentPage === totalPages}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Products;
