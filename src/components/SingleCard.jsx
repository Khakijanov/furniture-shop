// redux
import { useSelector, useDispatch } from "react-redux";

// redux-action
import { incrementOrder } from "../features/ProductSlice";

function SingleCard({ item }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.order);

  return (
    <div key={item.id} className="w-[30%] mb-6 mt-20">
      <div className="card bg-base-300   shadow-xl">
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
            <div className="badge badge-outline rounded-full px-2 py-4 font-bold">
              More info...
            </div>
            <div
              onClick={() => {
                dispatch(incrementOrder(item.id));
              }}
              className="badge badge-outline hover:cursor-pointer rounded-full px-2 py-4 font-bold"
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
