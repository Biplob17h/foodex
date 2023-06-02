import React from "react";
import { AiFillDelete } from "react-icons/ai";

const OrderDataSingle = ({ order }) => {
  const { _id,foodName, quantity, img, price, totalPrice } = order;
  
  const deleteSingleOrder = () =>{
    fetch(
      `https://food-ex-server-production.up.railway.app/api/v1/order/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="card w-full cubor2 p-2 gap-5  mb-5 flex flex-row">
      <div className="w-1/4 ">
        <img className="w-[150px] h-[75px] rounded" src={img} alt="" />
      </div>
      <div className="w-2/4">
        <h1 className="text-xl font-bold font-serif">{foodName}</h1>
        <p className="mt-3 ">
          <span className="text-[17px] font-semibold">Quantity :</span>{" "}
          {quantity}
        </p>
      </div>
      <div className="w-3/5 flex justify-between">
        <div>
          <p>
            <span className="text-[17px] font-semibold">Price :</span>{" "}
            {price}$
          </p>
          <p className="mt-3 ">
            <span className="text-[17px] font-semibold">Total Price :</span>{" "}
            {totalPrice}$
          </p>
        </div>
        <div onClick={deleteSingleOrder}  className="text-2xl p-4 rounded-full hover:text-3xl my-auto mr-5 cbtn1">
          <AiFillDelete />
        </div>
      </div>
    </div>
  );
};

export default OrderDataSingle;
