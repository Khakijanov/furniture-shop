import { useSelector, useDispatch } from "react-redux";
import {
  incrementOrder,
  decrementOrder,
  calculateOrder,
  deleteOrder,
} from "../features/ProductSlice";

function Cart() {
  const dispatch = useDispatch();
  const { ordred, totalProduct } = useSelector((state) => state.order);

  const handleIncrement = (id) => {
    dispatch(incrementOrder(id));
    dispatch(calculateOrder());
  };

  const handleDecrement = (id) => {
    dispatch(decrementOrder(id));
    dispatch(calculateOrder());
  };

  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
    dispatch(calculateOrder());
  };

  const calculateTax = () => {
    const taxRate = 0.1;
    const totalTax = ordred.reduce((acc, prod) => {
      return acc + prod.attributes.price * taxRate * prod.amount;
    }, 0);
    return totalTax.toFixed(2);
  };

  const calculateShipping = () => {
    return ordred.length > 0 ? 500 : 0;
  };

  const calculateOrderTotal = () => {
    const subtotal = totalProduct;
    const tax = parseFloat(calculateTax()) * 100;
    const shipping = calculateShipping();

    const total = subtotal + tax + shipping;
    return (total / 100).toFixed(2);
  };

  return (
    <div className="Mycontainer mt-10 flex gap-10 justify-between">
      <div className="w-full flex items-start gap-10">
        <div className="w-full">
          {ordred &&
            ordred.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex items-start justify-between w-full mb-5 border-b pb-4 border-base-content"
                >
                  <div>
                    <img
                      src={product.attributes.image}
                      className="w-[150px] h-[150px] rounded-3xl"
                      alt={product.attributes.title}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[18px] font-semibold capitalize text-primary">
                      <span className="font-bold text-[18px] text-base-content">
                        Product Name:{" "}
                      </span>
                      {product.attributes.title}
                    </h3>
                    <p className="text-[18px] font-semibold capitalize text-primary">
                      <span className="font-bold text-[18px] text-base-content">
                        Company:{" "}
                      </span>
                      {product.attributes.company}
                    </p>
                    <span className="flex items-center gap-2">
                      <span className="font-bold text-[18px] text-base-content">
                        Colors:{" "}
                      </span>
                      {product.attributes.colors.map((color) => {
                        return (
                          <div
                            key={color}
                            style={{ backgroundColor: color }}
                            className={`w-[20px] h-[20px] rounded-full`}
                          ></div>
                        );
                      })}
                    </span>
                    <p className="text-[18px] font-semibold capitalize text-primary">
                      <span className="font-bold text-[18px] text-base-content">
                        Price:{" "}
                      </span>
                      ${product.attributes.price}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-5">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleDecrement(product.id)}
                        className="btn btn-sm btn-outline"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        readOnly
                        value={product.amount}
                        className="input input-sm input-bordered w-[50px] text-center"
                      />
                      <button
                        onClick={() => handleIncrement(product.id)}
                        className="btn btn-sm btn-outline"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className=" w-[400px] border border-primary rounded-md bg-base-200 px-5 py-5">
          <p className="text-lg  flex items-center justify-between">
            Subtotal:{" "}
            <span className="font-bold text-primary">
              ${totalProduct / 100}
            </span>
          </p>
          <p className="text-lg  flex items-center justify-between">
            Tax:{" "}
            <span className="font-bold text-primary">${calculateTax()}</span>
          </p>
          <p className="text-lg  flex items-center justify-between">
            Shipping:{" "}
            <span className="font-bold text-primary">
              ${(calculateShipping() / 100).toFixed(2)}
            </span>
          </p>
          <h2 className="text-2xl font-bold mt-4 flex items-center justify-between">
            Total:{" "}
            <span className="text-primary">${calculateOrderTotal()}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Cart;
