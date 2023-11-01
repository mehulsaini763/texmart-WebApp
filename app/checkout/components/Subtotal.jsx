import React, { useEffect, useState } from "react";

const Subtotal = ({ cart }) => {
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
      totalPrice += +p.price * +p.quantity;
      let y =
        (Math.round(+p.discount) * +p.price) / (100 - Math.round(+p.discount));
      let x = Math.round(+p.price + y);
      totalPrePrice += x * +p.quantity;
    });

    setTotal(totalPrice);
    setPreviousPrice(totalPrePrice);
    setDiscount(totalPrePrice - totalPrice);
  };

  return (
    <div className="bg-neutral-900 p-4 rounded-md">
      <h1 className="text-xl">ORDER SUMMARY</h1>
      <hr className="border-1 border-neutral-700 my-2" />
      <div className="space-y-2 text-base lg:text-lg">
        <div className="flex justify-between">
          <p>
            Price {`(${cart.length} ${cart.length == 1 ? "item" : "items"})`}
          </p>
          <p>₹{previousPrice}</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p className="text-green-500">- ₹{discount}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charges</p>
          <p>FREE</p>
        </div>
        <div className="flex justify-between">
          <p>Total Amount</p>
          <p>₹{total}</p>
        </div>
      </div>
    </div>
  );
};

export default Subtotal;
