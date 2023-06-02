import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextApi/UserContext";
import { toast } from "react-hot-toast";

const OneMoreStep = () => {
  const { user, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || `/`;

  const handleFromData = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;

    const userInfo = {
      name,
      address,
      phone,
      email: user.email,
    };

    const profile = {
      displayName: name,
    };

    updateUser(profile)
      .then(() => {
        console.log("user update");
      })
      .catch((error) => {
        console.log(error);
      });
    
    fetch("https://food-ex-server-production.up.railway.app/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.res === "success") {
          toast.success("user created successfully");
          navigate(from, { replace: true });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center mt-5 md:mt-10 text-2xl md:text-5xl font-bold">
        One More Step
      </h1>
      <div className="card bg-base-100 cbor2 mx-auto w-[90%] text-start md:w-[420px] cubor2 mt-10 text-slate-700">
        <form
          onSubmit={handleFromData}
          className="card-body"
          encType="multipart/form-data"
        >
          <h2 className=" text-[22px] font-semibold">Update your profile</h2>
          <div className="w-full ">
            <input
              type="text"
              name="name"
              className="w-full input-bordered h-[40px] rounded px-2 cubor4 mt-5"
              placeholder="Full Name"
              required
            />
            <input
              type="text"
              name="address"
              className="w-full input-bordered h-[40px] rounded px-2 cubor4 mt-5"
              placeholder="Your address"
              required
            />
            <input
              type="number"
              name="phone"
              className="w-full input-bordered h-[40px] rounded px-2 cubor4 mt-5"
              placeholder="Your Phone"
              required
            />
            <div className="flex mt-5">
              <button
                type="submit"
                className="btn btn-ghost  w-full cbtn1 ml-1 mt-3"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OneMoreStep;
