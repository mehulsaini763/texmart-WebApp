import React, { useEffect, useState } from "react";

const Subtotal = ({cart}) => {
  useEffect(() => {
    previousPriceAndDiscount();
  }, [cart]);

  const [previousPrice, setPreviousPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const previousPriceAndDiscount = () => {
    let totalPrice = 0;
    let totalPrePrice = 0;

    cart.map((p) => {
      totalPrice += p.price*p.quantity;
      let y =
        (Math.round(p.discountPercentage) * p.price) /
        (100 - Math.round(p.discountPercentage));
      let x = Math.round(p.price + y);
      totalPrePrice += x*p.quantity;
    });

    setTotal(totalPrice);
    setPreviousPrice(totalPrePrice);
    setDiscount(totalPrePrice - totalPrice);
  };

  return (
    <div>
      <h1>PRICE DETAILS</h1>
      <div className="flex justify-between">
        <p>Price</p>
        <p>{previousPrice}</p>
      </div>
      <div className="flex justify-between">
        <p>Discount</p>
        <p className="text-green-500">- {discount}</p>
      </div>
      <div className="flex justify-between">
        <p>Delivery Charges</p>
        <p>FREE</p>
      </div>
      <div className="flex justify-between">
        <p>Total Amount</p>
        <p>{total}</p>
      </div>
      <button>Proceed to Buy</button>
    </div>
  );
};

export default Subtotal;
