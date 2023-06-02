import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./UserContext";
import { createContext } from "react";

export const orderContext = createContext()

const OrderContext = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    fetch(
      `https://food-ex-server-production.up.railway.app/api/v1/order?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, [user?.email, orderData]);

  const order = {orderData}
  

  return <orderContext.Provider value={order}>
    {children}
    </orderContext.Provider>;
};

export default OrderContext;
