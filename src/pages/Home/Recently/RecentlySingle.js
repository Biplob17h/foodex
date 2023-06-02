import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../ContextApi/UserContext";

const RecentlySingle = ({ food }) => {
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
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
      userName: user?.displayName,
      email : user?.email,
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
    <div>
      <div className="card cuscard bg-base-100 relative mx-auto rounded-lg w-[300px] cushover1  shadow-xl mt-10 overflow-hidden">
        <figure>
          <img
            className="w-[300px] h-[350px] bg-cover rounded-md"
            src={food?.img}
            alt="food img"
          />
        </figure>
        <div className="absolute cuscard-body rounded-lg  -right-full text-start text-white w-full h-full cusCardBody">
          <div className="p-5">
            <h2 className="card-title text-2xl">{food?.name}</h2>
            <p className=" mt-2">
              <span className="font-semibold">Price: </span>
              {food?.price} $
            </p>
            <p className="">
              <span className="font-semibold">Quantity: </span>
              <button
                onClick={() => {
                  handleQuantityMinus();
                }}
                className="btn btn-ghost mr-1">
                -
              </button>
              {quantity}
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="btn btn-ghost ml-1">
                +
              </button>
            </p>
            <p className="">
              <span className="font-semibold">Country: </span>
              {food?.country}
            </p>
            <p className="">
              <span className="font-semibold">Description: </span>
              {food?.dis.slice(0, 130)}
            </p>
          </div>
          <div className=" justify-start absolute  bottom-0">
            <button
              onClick={() => {
                handleOrderFood();
              }}
              className="btn btn-ghost cbtn1 w-[300px]">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlySingle;
