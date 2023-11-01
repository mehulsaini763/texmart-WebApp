import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Subtotal = ({ cart }) => {
  useEffect(() => {
    previousPriceAndDiscount();
  }, [cart]);

  const router = useRouter();
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
    <div className="bg-neutral-900 p-4 rounded-md mx-2 lg:mx-0">
      <h1 className="text-base lg:text-xl">PRICE DETAILS</h1>
      <hr className="border border-neutral-500 my-2" />
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

// {
//   /* <> */
// }
//   <div className="bg-neutral-900 p-4 rounded-md">
//     <h1 className="text-base">PRICE DETAILS</h1>
//     <hr className="border border-neutral-500 my-2" />
//     <div className="space-y-2 text-sm">
//       <div className="flex justify-between">
//         <p>
//           Price{" "}
//           {`(${cart.length} ${cart.length == 1 ? "item" : "items"})`}
//         </p>
//         <p>₹{previousPrice}</p>
//       </div>
//       <div className="flex justify-between">
//         <p>Discount</p>
//         <p className="text-green-500">- ₹{discount}</p>
//       </div>
//       <div className="flex justify-between">
//         <p>Delivery Charges</p>
//         <p>FREE</p>
//       </div>
//       <div className="flex justify-between">
//         <p>Total Amount</p>
//         <p>₹{total}</p>
//       </div>
//     </div>
//     <div className="fixed bottom-0 inset-x-0 flex items-center text-center">
//       <p className="w-1/2 bg-neutral-950 text-lg font-bold  px-2 py-4">
//         ₹{total}
//       </p>
//       <button
//         className="w-1/2 bg-yellow-300 text-black font-bold text-center px-2 py-4"
//         onClick={() => router.push("/checkout")}
//       >
//         Proceed to Buy
//       </button>
//     </div>
//   </div>
//   <hr className="my-6" />
// </>
export default Subtotal;
