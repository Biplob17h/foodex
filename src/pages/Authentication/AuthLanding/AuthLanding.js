import React, { useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextApi/UserContext";

const AuthLanding = () => {
  const { googleLogin, facebookLogin } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleFaceBookLogin = () => {
    facebookLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="card bg-base-100 cbor2 mx-auto w-[90%] text-start md:w-[420px] cubor2 text-slate-800">
      <div className="card-body">
        <h2 className="card-title text-[27px] font-bold">Wellcome!</h2>
        <p>Sign up or log in to continue</p>
      </div>
      <div className="px-7">
        <button onClick={handleFaceBookLogin} className="flex btn w-full relative bg-blue-600 border-none cusbtn3">
          <BsFacebook className="text-xl mr-3 absolute start-5" />
          Continue With Facebook
        </button>
        <button onClick={handleGoogleLogin} className="flex btn w-full relative mt-3 border-none bg-white text-slate-700 font-bold cusbtn4">
          <FcGoogle className="text-xl mr-3 absolute start-5" />
          Continue With Google
        </button>
      </div>
      <div className="divider">or</div>
      <div className="mt-5 flex flex-col px-7 w-full">
        <Link to='/auth/login/email' className="btn btn-secondary">Log In</Link>
        <Link to='/auth/register/email' className="btn btn-ghost cubor3 mt-5">Sign Up</Link>
      </div>
      <div className="my-5 px-7 text-slate-600  text-[17px] ">
        By signing up, you agree to our
        <Link className="text-[#e21b70] font-semibold">
          Terms and Conditions
        </Link>
        and <Link className="text-[#e21b70] font-semibold">Privacy Policy</Link>
        .
      </div>
    </div>
  );
};

export default AuthLanding;
