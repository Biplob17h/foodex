import React from "react";
import { AiFillDelete } from "react-icons/ai";

const OrderSingleDataForMobile = ({ order }) => {
  const { _id,foodName, quantity, img, price, totalPrice } = order;
  
  const deleteSingleOrder = () =>{
    fetch(`https://food-ex-server-production.up.railway.app/api/v1/order/${_id}`,{
      method : 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }
  return (
    <div className="mx-2 mt-5">
      <div className="cubor2 pt-1 rounded">
        <img className="rounded" src={img} alt="" />
        <h1 className="text-xl font-semibold font-serif px-1">{foodName}</h1>
        <div className="flex justify-between px-1">
          <p>
            <span className="font-[500]">Price :</span> {price}$
          </p>
          <p>
            <span className="font-[500]">Total Price :</span> {totalPrice}$
          </p>
        </div>
        <div className="flex justify-between px-1 mt-2">
          <p>
            <span className="font-[500]">quantity :</span> {quantity}$
          </p>
          <AiFillDelete onClick={deleteSingleOrder} className="text-2xl text-slate-600"/>
        </div>
      </div>
    </div>
  );
};

export default OrderSingleDataForMobile;
