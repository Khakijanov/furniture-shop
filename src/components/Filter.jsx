import React, { useState } from "react";

function Filter() {
  // Range value uchun state yaratamiz
  const [rangeValue, setRangeValue] = useState(40);

  // Range inputining o'zgarish hodisasini kuzatib borish uchun handler funksiyasi
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
  return (
    <div>
      <div className="Mycontainer bg-base-200 p-5 mt-10 mb-5">
        <div className="flex items-center justify-between gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Search Product</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Select Category</span>
            </div>
            <select className="select select-bordered ">
              <option selected>all</option>
              <option>Tables</option>
              <option>Chairs</option>
              <option>Kids</option>
              <option>Sofas</option>
              <option>Beds</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Select Company</span>
            </div>
            <select className="select select-bordered">
              <option selected>all</option>
              <option>Modenza</option>
              <option>Luxora</option>
              <option>Artifex</option>
              <option>Comfora</option>
              <option>Homestead</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Sort By</span>
            </div>
            <select className="select select-bordered">
              <option selected>a-z</option>
              <option>z-a</option>
              <option>high</option>
              <option>low</option>
            </select>
          </label>
        </div>
        <div className="flex justify-between items-start mt-10">
          <label
            htmlFor="
        "
          >
            <div className="flex flex-col w-full">
              <div className="w-full flex justify-between items-center">
                <span>Select Price</span>
                <span>{rangeValue}</span>
              </div>
              <input
                type="range"
                min={0}
                max="100"
                value={rangeValue}
                className="range w-[300px] h-[20px]"
                onChange={handleRangeChange} // O'zgarishni kuzatish uchun handler qo'shildi
              />
              <div className="flex justify-end">
                <p className="text-primary font-semibold">
                  <span className="text-base-content font-bold">Max:</span>{" "}
                  1.000.000
                </p>
              </div>
            </div>
          </label>
          <div className="form-control">
            <label className="cursor-pointer label flex flex-col ">
              <span className="label-text">free shipping</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-error"
              />
            </label>
          </div>
          <div className="  ">
            <button className="btn btn-outline w-[200px] ">Search</button>
            <button className="btn btn-active btn-primary w-[200px] ml-5">
              Reset
            </button>
          </div>
          {/* Joriy qiymatni ko'rsatish uchun */}
        </div>
      </div>
    </div>
  );
}

export default Filter;
