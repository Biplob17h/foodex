import React, { useState } from "react";
import { toast } from "react-hot-toast";

import { useLoaderData } from "react-router-dom";
import OrderAFood from "./OrderAFood";

const OrderFood = () => {
  const foods = useLoaderData();
  
  return (
    <div className="grid md:grid-cols-3 gap-10 md:max-w-6xl mx-auto">
      {foods.map((food) => (
        <OrderAFood key={food._id} food={food}></OrderAFood>
      ))}
    </div>
  );
};

export default OrderFood;
