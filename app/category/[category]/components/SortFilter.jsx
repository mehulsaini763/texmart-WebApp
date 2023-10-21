import React, { useState } from "react";
import "../page.css";
import useScreenSize from "@/app/customHook/useScreenSize";

const SortFilter = ({ products, setProducts }) => {
  const screenSize = useScreenSize();
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [baseSort, setbaseSort] = useState(products);
  const [brands, setBrands] = useState([]);
  const [filter, setFilter] = useState({
    price: [],
    brands: [],
  });

  products.map((p) => {
    if (!brands.includes(p.specifications["MANUFACTURER DETAILS"][0].data)) {
      setBrands([...brands, p.specifications["MANUFACTURER DETAILS"][0].data]);
    }
  });

  const handleSort = (sortBy) => {
    if (sortBy == "F") {
      setProducts([...baseSort]);
    } else if (sortBy == "PLF") {
      products.sort((a, b) => a.price - b.price);
      setProducts([...products]);
    } else if (sortBy == "PHF") {
      products.sort((a, b) => b.price - a.price);
      setProducts([...products]);
    } else {
      products.sort((a, b) => b.discount - a.discount);
      setProducts([...products]);
    }
    setShowSort(false);
  };

  const handleFilter = () => {
    products = baseSort;

    if (filter.price.length != 0) {
      products = products.filter(
        (p) =>
          +p.price >= filter.price[0] &&
          +p.price <= filter.price[filter.price.length - 1]
      );
    }

    if (filter.brands.length != 0) {
      products = products.filter((p) =>
        filter.brands.includes(p.specifications["MANUFACTURER DETAILS"][0].data)
      );
    }

    setProducts([...products]);
    setShowFilter(false);
  };

  const priceFilter = (bool, x, y) => {
    if (bool) {
      filter.price.push(x);
      filter.price.push(y);
    } else {
      filter.price.map(
        (e, i) =>
          (e == x || e == y) &&
          filter.price.splice(i + 1, 1) &&
          filter.price.splice(i, 1)
      );
    }
    filter.price.sort();
  };

  const brandFilter = (bool, b) => {
    if (bool) {
      filter.brands.push(b);
    } else {
      filter.brands.map((e, i) => e == b && filter.brands.splice(i, 1));
    }
  };

  if (screenSize.width >= 1024) {
    return (
      <div className="sortfilter space-y-4">
        <div className="space-y-2">
          <p className="text-lg font-medium">SORT BY</p>
          <select
            className="bg-neutral-900 rounded-md border p-2 se"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="F">Featured</option>
            <option value="PLF">Price {"(Lowest First)"}</option>
            <option value="PHF">Price {"(Highest First)"}</option>
            <option value="DHF">Discount {"(Highest First)"}</option>
          </select>
        </div>
        <hr className="border-1 border-neutral-500" />
        <div className="space-y-2">
          <p className="text-lg font-medium">PRICE</p>
          <div>
            <div className="options">
              <input
                type="checkbox"
                onChange={(e) => {
                  priceFilter(e.target.checked, 10000, 20000);
                }}
              />
              <p>10,000 - 20,000</p>
            </div>
            <div className="options">
              <input
                type="checkbox"
                onChange={(e) => {
                  priceFilter(e.target.checked, 20001, 30000);
                }}
              />
              <p>20,001 - 30,000</p>
            </div>
            <div className="options">
              <input
                type="checkbox"
                onChange={(e) => {
                  priceFilter(e.target.checked, 30001, 50000);
                }}
              />
              <p>30,001 - 50,000</p>
            </div>
            <div className="options">
              <input
                type="checkbox"
                onChange={(e) => {
                  priceFilter(e.target.checked, 50001, 100000);
                }}
              />
              <p>50,001 - 1,00,000</p>
            </div>
          </div>
        </div>
        <hr className="border-1 border-neutral-500" />
        <div className="space-y-2">
          <p className="text-lg font-medium">BRAND</p>
          <div>
            {brands.map((b) => {
              return (
                <div key={b} className="options">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      brandFilter(e.target.checked, b);
                    }}
                  />
                  <p>{b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex bg-neutral-700 font-semibold">
          <button
            className="text-white px-4 w-full"
            onClick={() => setShowSort(true)}
          >
            Sort
          </button>
          <hr className="py-6 border border-neutral-900" />
          <button
            className="text-white px-4 w-full"
            onClick={() => setShowFilter(true)}
          >
            Filter
          </button>
        </div>
        {showSort && (
          <div className="fixed bg-neutral-800/80 inset-0 flex flex-col justify-between">
            <div></div>
            <div className="bg-neutral-800 text-white text-sm p-2 rounded-r-md space-y-2 font-thin">
              <p className="font-black">SORT BY</p>
              <hr className="border" />
              <p onClick={() => handleSort("F")}>Featured</p>
              <p onClick={() => handleSort("PLF")}>Price {"(Lowest First)"}</p>
              <p onClick={() => handleSort("PHF")}>Price {"(Highest First)"}</p>
              <p onClick={() => handleSort("DHF")}>
                Discount {"(Highest First)"}
              </p>
            </div>
          </div>
        )}

        <div
          className={`sortfilter fixed bg-neutral-800/80 inset-0 flex flex-col justify-between ${
            showFilter ? "block" : "hidden"
          }`}
        >
          <div className="bg-neutral-800/90 text-white py-2 px-4 space-y-2 h-full text-sm">
            <p className="font-black">FILTER</p>
            <hr className="border-1 border-neutral-500" />
            <p className="font-bold">PRICE</p>
            <div>
              <div className="options">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    priceFilter(e.target.checked, 10000, 20000);
                  }}
                />
                <p>10,000 - 20,000</p>
              </div>
              <div className="options">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    priceFilter(e.target.checked, 20001, 30000);
                  }}
                />
                <p>20,001 - 30,000</p>
              </div>
              <div className="options">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    priceFilter(e.target.checked, 30001, 50000);
                  }}
                />
                <p>30,001 - 50,000</p>
              </div>
              <div className="options">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    priceFilter(e.target.checked, 50001, 100000);
                  }}
                />
                <p>50,001 - 1,00,000</p>
              </div>
            </div>
                  <hr className="border-1  border-neutral-500" />
            <p className="font-bold">BRAND</p>
            <div>
              {brands.map((b) => {
                return (
                  <div key={b} className="options">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        brandFilter(e.target.checked, b);
                      }}
                    />
                    <p>{b}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex">
            <button
              className="w-full bg-neutral-700 py-2 text-white font-bold"
              onClick={() => {
                setFilter({ price: [], brands: [] });
                setShowFilter(false);
              }}
            >
              CLEAR
            </button>
            <hr className="border border-neutral-800 py-4" />
            <button
              className="w-full bg-neutral-700 py-2 text-white font-bold"
              onClick={handleFilter}
            >
              APPLY
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default SortFilter;
