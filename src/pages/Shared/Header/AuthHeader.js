import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/food_ex_logo-removebg-preview.png";

const AuthHeader = () => {
  return (
    <div className="navbar justify-between bg-base-100">
      {/*header for small device */}
      <div className="navbar-start md:hidden">
        <h1 className="text-2xl font-serif font-bold">Wellcome</h1>
      </div>
      {/* logo */}
      <Link to="/">
        <div className="w-[100px]">
          <img src={img} alt="company logo" />
        </div>
      </Link>
      {/* header for big  device*/}
      <div>
        <h1 className="text-5xl font-serif font-bold hidden md:block">
          Wellcome
        </h1>
      </div>
    </div>
  );
};

export default AuthHeader;
