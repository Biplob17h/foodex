/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/UserContext";
import img from "../../assets/vector-users-icon.webp";
import { FaRegEdit } from "react-icons/fa";
import Modal from "./Modal";


const Profile = () => {
  const { user} = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    fetch(
      `https://food-ex-server-production.up.railway.app/api/v1/users?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setUserInfo(data.result));
  }, [user]);

  return (
    <div className="w-[400px] mx-auto mb-32">
      <div className="relative">
        <img
          className="rounded-full w-32 mx-auto"
          src={user?.photoURL ? user?.photoURL : img}
          alt="Broken photo or invalid URL. try to refresh"
        />
        <label
          htmlFor="my-modal"
          className="btn btn-ghost absolute -bottom-[10px] right-[110px]">
          <FaRegEdit className="cursor-pointer" />
        </label>
        <Modal id={`my-modal`} htmlFor={`my-modal`}></Modal>
      </div>
      <div className="mt-5 ml-10">
        <h1 className="text-2xl font-bold">
          <span className="text-3xl font-bold">Name</span>
          <input
            name="name"
            type="text"
            className="input input-bordered w-full max-w-xs mt-2"
            defaultValue={user?.displayName}
            required
            disabled
          />
          
        </h1>
      </div>
      <div className="mt-5 ml-10">
        <h1 className="text-2xl font-bold">
          <span className="text-3xl font-bold">Email</span>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs mt-2"
            defaultValue={user?.email}
            required
            disabled
          />
        </h1>
      </div>
      <div className="mt-5 ml-10">
        <h1 className="text-2xl font-bold">
          <span className="text-3xl font-bold">Phone</span>
          <input
            name="phone"
            type="number"
            className="input input-bordered w-full max-w-xs mt-2"
            defaultValue={userInfo?.phone}
            disabled
          />
          
        </h1>
      </div>
      <div className="mt-5 ml-10">
        <h1 className="text-2xl font-bold">
          <span className="text-3xl font-bold">Address</span>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs mt-2"
            defaultValue={userInfo?.address}
            disabled
          />
          
        </h1>
      </div>
    </div>
  );
};

export default Profile;
