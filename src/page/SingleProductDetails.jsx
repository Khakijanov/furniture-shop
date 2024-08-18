import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementOrder,
  calculateOrder,
  addAllProducts,
} from "../features/ProductSlice";

function SingleProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    fetch("https://json-api.uz/api/project/furniture-shop/products/" + id)
      .then((data) => data.json())
      .then((product) => {
        setSingleProduct(product);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  useEffect(() => {
    fetch("https://json-api.uz/api/project/furniture-shop/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch(addAllProducts(data.data)); // Mahsulotlarni Redux Store'ga qo'shish
      })
      .catch((error) => console.error("Error fetching all products:", error));
  }, [dispatch]);

  const handleAddToCart = () => {
    if (singleProduct) {
      dispatch(incrementOrder(singleProduct.id));
      dispatch(calculateOrder());
    }
  };

  console.log(singleProduct);

  return (
    <div className="Mycontainer mt-10">
      <div className="card lg:card-side bg-base-300 shadow-xl">
        <figure>
          {singleProduct && (
            <img
              src={singleProduct.attributes.image}
              className="w-[400px] h-[400px]"
              alt={singleProduct.attributes.title}
            />
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[35px]">
            {singleProduct?.attributes?.title}
          </h2>
          <p>Click the button to add this product to your cart.</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddToCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductDetails;
