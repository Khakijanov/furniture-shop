import { useSelector, useDispatch } from "react-redux";
import { incrementOrder, calculateOrder } from "../features/ProductSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function SingleCard({ item }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.order);

  const handleAddToCart = (id) => {
    try {
      dispatch(incrementOrder(id));

      dispatch(calculateOrder());
      toast.success("You added a new product to the cart!");
    } catch (error) {
      toast.error("There was an issue adding the product to the cart.");
    }
  };

  return (
    <div key={item.id} className="w-[30%] mb-6 mt-20">
      <div className="card bg-base-300 shadow-xl">
        <figure>
          <img
            src={item.attributes.image}
            className="h-[280px] w-full"
            alt={item.attributes.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.attributes.title}
            <div className="badge badge-secondary font-pacifico text-[12px]">
              NEW
            </div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>${item.attributes.price}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/singleProductDetails/${item.id}`}
              className="select-none badge badge-outline rounded-full px-2 py-4 font-bold"
            >
              More info...
            </Link>
            <div
              onClick={() => handleAddToCart(item.id)}
              className="flex items-center gap-1 select-none badge badge-outline hover:cursor-pointer rounded-full px-2 py-4 font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
