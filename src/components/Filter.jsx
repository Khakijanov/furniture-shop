import React, { useState } from "react";

function Filter({ onFilterChange }) {
  const [rangeValue, setRangeValue] = useState(1000000);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [sort, setSort] = useState("a-z");
  const [freeShipping, setFreeShipping] = useState(false);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    onFilterChange({
      searchTerm,
      category,
      company,
      sort,
      rangeValue: event.target.value,
      freeShipping,
    });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onFilterChange({
      searchTerm: event.target.value,
      category,
      company,
      sort,
      rangeValue,
      freeShipping,
    });
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onFilterChange({
      searchTerm,
      category: event.target.value,
      company,
      sort,
      rangeValue,
      freeShipping,
    });
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
    onFilterChange({
      searchTerm,
      category,
      company: event.target.value,
      sort,
      rangeValue,
      freeShipping,
    });
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
    onFilterChange({
      searchTerm,
      category,
      company,
      sort: event.target.value,
      rangeValue,
      freeShipping,
    });
  };

  const handleFreeShippingChange = () => {
    setFreeShipping(!freeShipping);
    onFilterChange({
      searchTerm,
      category,
      company,
      sort,
      rangeValue,
      freeShipping: !freeShipping,
    });
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
              value={searchTerm}
              onChange={handleSearchChange}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Select Category</span>
            </div>
            <select
              className="select select-bordered"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="all">all</option>
              <option value="Tables">Tables</option>
              <option value="Chairs">Chairs</option>
              <option value="Kids">Kids</option>
              <option value="Sofas">Sofas</option>
              <option value="Beds">Beds</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Select Company</span>
            </div>
            <select
              className="select select-bordered"
              value={company}
              onChange={handleCompanyChange}
            >
              <option value="all">all</option>
              <option value="Modenza">Modenza</option>
              <option value="Luxora">Luxora</option>
              <option value="Artifex">Artifex</option>
              <option value="Comfora">Comfora</option>
              <option value="Homestead">Homestead</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Sort By</span>
            </div>
            <select
              className="select select-bordered"
              value={sort}
              onChange={handleSortChange}
            >
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
              <option value="high">high</option>
              <option value="low">low</option>
            </select>
          </label>
        </div>
        <div className="flex justify-between items-start mt-10">
          <label>
            <div className="flex flex-col w-full">
              <div className="w-full flex justify-between items-center">
                <span>Select Price</span>
                <span>{rangeValue}</span>
              </div>
              <input
                type="range"
                min={0}
                max={1000000}
                value={rangeValue}
                className="range w-[300px] h-[20px]"
                onChange={handleRangeChange}
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
            <label className="cursor-pointer label flex flex-col">
              <span className="label-text">free shipping</span>
              <input
                type="checkbox"
                checked={freeShipping}
                onChange={handleFreeShippingChange}
                className="checkbox checkbox-error"
              />
            </label>
          </div>
          <div>
            <button
              className="btn btn-outline w-[200px]"
              onClick={() =>
                onFilterChange({
                  searchTerm,
                  category,
                  company,
                  sort,
                  rangeValue,
                  freeShipping,
                })
              }
            >
              Search
            </button>
            <button
              className="btn btn-active btn-primary w-[200px] ml-5"
              onClick={() => {
                setSearchTerm("");
                setCategory("all");
                setCompany("all");
                setSort("a-z");
                setRangeValue(1000000);
                setFreeShipping(false);
                onFilterChange({
                  searchTerm: "",
                  category: "all",
                  company: "all",
                  sort: "a-z",
                  rangeValue: 1000000,
                  freeShipping: false,
                });
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
