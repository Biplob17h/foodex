import React, { useContext, useState } from "react";
import img from "../../assets/email-logo.jpg";
import { AuthContext } from "../../ContextApi/UserContext";
import {  useNavigate } from "react-router-dom";

const RegisterEmail = () => {
  const [error, setError] = useState("");
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleFromData = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/auth/one");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="card bg-base-100 cbor2 mx-auto w-[90%] text-start md:w-[420px] cubor2 mt-7 text-slate-700">
      <form onSubmit={handleFromData} className="card-body">
        <img className="w-[90px]" src={img} alt="" />
        <h2 className="card-title text-[27px] font-bold">Wellcome!</h2>
        <h3>Start sign Up by typing email your password.</h3>

        <div className="w-full ">
          <input
            type="email"
            name="email"
            className="w-full input-bordered h-[40px] rounded px-2 cubor4 mt-5"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            className="w-full input-bordered h-[40px] rounded px-2 cubor4 mt-5"
            placeholder="password"
            required
          />
          <p className="text-red-600">{error}</p>
          <button type="submit" className="btn btn-ghost cbtn1 w-full mt-3">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterEmail;
