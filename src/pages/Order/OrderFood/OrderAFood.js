import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../ContextApi/UserContext";

const OrderAFood = ({ food }) => {
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const { displayName, email } = user;
  const { img, name, price } = food;

  const handleQuantityMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      return toast.error("Quantity can't be lower than one");
    }
  };

  const totalPrice = parseInt(quantity * price);

  const handleOrderFood = () => {
    setQuantity(1);
    const order = {
      userName: displayName,
      email,
      quantity,
      totalPrice,
      img,
      foodName: name,
      price,
      isConfirmd: false,
      isRecently: true,
    };

    fetch("https://food-ex-server-production.up.railway.app/api/v1/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.res) {
          toast.success("Item Add To Cart");
        }
      });
  };

  return (
    <div className="card w-full h-[530px] bg-base-100 cubor2 shadow-xl relative md:w-96">
      <figure className="w-[300px] mx-auto">
        <img className={`h-[250px] mt-2`} src={food.img} alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[23px] font-mono">{food.name}</h2>
        <h2 className=" font-semibold">Price : {food.price} $</h2>
        <h2 className=" font-semibold">Total Order Time: {food.orderTime}</h2>
        <h2 className="font-semibold">Country : {food.country}</h2>
        <h2 className=" font-semibold">
          Quantity:{" "}
          <button
            onClick={() => {
              handleQuantityMinus();
            }}
            className="btn btn-ghost">
            -
          </button>{" "}
          {quantity}{" "}
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
            className="btn btn-ghost">
            +
          </button>
        </h2>
        <button
          onClick={handleOrderFood}
          className="btn btn-ghost absolute bottom-0 w-full start-0 cbtn1">
          Order Food
        </button>
      </div>
    </div>
  );
};

export default OrderAFood;
