import React, { useState } from "react";
import "../page.css";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const SortFilter = ({ products, setProducts, setShowSortFilter }) => {
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
    handleFilter();
  };

  const brandFilter = (bool, b) => {
    if (bool) {
      filter.brands.push(b);
    } else {
      filter.brands.map((e, i) => e == b && filter.brands.splice(i, 1));
    }
    handleFilter();
  };

  return (
    <div className="sortfilter space-y-4 p-2 lg:p-0">
      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="text-lg font-medium">SORT BY</p>
          <button
            className="lg:hidden"
            onClick={() => setShowSortFilter(false)}
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
        </div>
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
              checked={filter.price.includes(10000) ? true : false}
              onChange={(e) => {
                priceFilter(e.target.checked, 10000, 20000);
              }}
            />
            <p>10,000 - 20,000</p>
          </div>
          <div className="options">
            <input
              type="checkbox"
              checked={filter.price.includes(20001) ? true : false}
              onChange={(e) => {
                priceFilter(e.target.checked, 20001, 30000);
              }}
            />
            <p>20,001 - 30,000</p>
          </div>
          <div className="options">
            <input
              type="checkbox"
              checked={filter.price.includes(30001) ? true : false}
              onChange={(e) => {
                priceFilter(e.target.checked, 30001, 50000);
              }}
            />
            <p>30,001 - 50,000</p>
          </div>
          <div className="options">
            <input
              type="checkbox"
              checked={filter.price.includes(50001) ? true : false}
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
                  checked={filter.brands.includes(b) ? true : false}
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

      <div className="lg:hidden absolute bottom-0 inset-x-0 flex bg-neutral-950 justify-between items-center">
        <button
          className="w-full py-4"
          onClick={() => {
            setFilter({
              price: [],
              brands: [],
            });
            setProducts([...baseSort]);
          }}
        >
          Clear
        </button>
        <hr className="py-6 border border-neutral-700" />
        <button
          className="w-full py-4"
          onClick={() => setShowSortFilter(false)}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default SortFilter;
