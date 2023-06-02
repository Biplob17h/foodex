import React, { useContext } from "react";
import { orderContext } from "../../ContextApi/OrderContext";
import OrderDataSingle from "./OrderDataSingle";
import OrderSingleDataForMobile from "./OrderSingleDataForMobile";
import { countTotalPrice } from "../../Components/countTotalPrice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { orderData } = useContext(orderContext);
  const totalPrice = countTotalPrice(orderData);
  const tax = parseInt(totalPrice) * 0.1;
  const totalTax = parseFloat(tax).toFixed(2);
  const deliveryCharge = orderData.length * 2;
  const grandTotal = parseInt(totalPrice) + parseFloat(totalTax);
  const navigate = useNavigate()

  const deleteAllOrder = () => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) {
      toast("Delete cancel by user");
    } else {
      fetch("https://food-ex-server-production.up.railway.app/api/v1/order", {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Orders  data delete successfully");
        });
    }
  };
  const ConfirmAllOrder = () => {
    const confirm = window.confirm("Are you sure you want to confirm order?");
    if (!confirm) {
      toast("Food order cancel by user");
    } else {
      fetch("https://food-ex-server-production.up.railway.app/api/v1/order", {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Orders placed successfully");
          navigate("/home/confirm");
        });
    }
  };

  return (
    <div className="mb-40 mx-5  flex flex-col-reverse md:mx-20 md:flex-row">
      <div className="hidden w-full md:w-3/4 md:block">
        {orderData.map((order) => (
          <OrderDataSingle key={order._id} order={order}></OrderDataSingle>
        ))}
      </div>
      <div className=" w-full md:w-3/4 md:hidden">
        {orderData.map((order) => (
          <OrderSingleDataForMobile
            key={order._id}
            order={order}></OrderSingleDataForMobile>
        ))}
      </div>
      <div className="w-full select-none h-[400px] md:w-2/5 relative cubor2 md:ml-10 rounded">
        <h1 className="text-2xl font-serif text-center font-semibold mt-5">
          Food Cart
        </h1>
        <div>
          <div className="text-start mt-10 ml-5">
            <p className="font-semibold text-[18px] mb-2">
              Total Orders : {orderData.length} Items
            </p>
            <p className="font-semibold text-[18px] mb-2">
              Total Food Price: {totalPrice} $
            </p>
            <p className="font-semibold text-[18px] mb-2">Tax: {totalTax} $</p>
            <p className="font-semibold text-[18px] mb-2">
              Delivery Charge:{" "}
              {orderData.length < 5 ? <>{`free`}</> : <>{deliveryCharge}$</>}
            </p>
            <h1 className="text-2xl font-bold mt-10">
              Grand Total :{" "}
              {orderData.length < 5 ? (
                <>{grandTotal}$</>
              ) : (
                <>{grandTotal + parseInt(deliveryCharge)}$</>
              )}
            </h1>
          </div>
        </div>
        <div className="ml-1 md:ml-0">
          <>
            {orderData.length === 0 ? (
              <button
                disabled
                onClick={() => {
                  deleteAllOrder();
                }}
                className="btn w-[250px]  btn-ghost cbtn3 md:absolute  md:bottom-0 md:start-5 md:w-[150px] ">
                Delete Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  deleteAllOrder();
                }}
                className="btn btn-ghost w-[250px]  cbtn3 md:absolute  md:bottom-0 md:start-5 md:w-[150px]">
                Delete Cart
              </button>
            )}
          </>
          <>
            {orderData.length === 0 ? (
              <button
                disabled
                onClick={ConfirmAllOrder}
                className="btn w-[250px]  btn-ghost cbtn1 md:absolute  md:bottom-0 md:end-5 md:w-[180px]">
                Confirm Order
              </button>
            ) : (
              <Link>
                <button
                  onClick={ConfirmAllOrder}
                  className="btn w-[250px]  btn-ghost cbtn1 md:absolute  md:bottom-0 md:end-5 md:w-[180px]">
                  Confirm Order
                </button>
              </Link>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Cart;
