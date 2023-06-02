import React, { useContext, useState } from "react";
import img from "../../../assets/email-logo.jpg";
import { AuthContext } from "../../../ContextApi/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

const LoginEmail = () => {
  const [error, setError] = useState("");
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || `/`;

  const handleFromData = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
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
        <h2 className="card-title text-[27px] font-bold">Wellcome Back</h2>
        <h3>Log in by typing email your password.</h3>

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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginEmail;
