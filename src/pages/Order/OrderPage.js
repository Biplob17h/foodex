import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://food-ex-server-production.up.railway.app/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="grid grid-cols-3 ml-32">
      {categories.map((category) => (
        <Link
          key={category._id}
          to={`/home/order/${category.category}`}
          className="book-main "
        >
          <div className="book">
            <div className="imgbox">
              <img src={category.img} alt="" />
            </div>
            <div className="content ">
              <h1 className="text-[27px] font-serif font-bold">
                {category.name}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OrderPage;
