import React from "react";

const ChefSingle = ({ chef }) => {
  const {
    name,
    img,
    country,
    sex,
    work_experience,
    best_dish,
    good_with,
    age,
    email,
  } = chef;
  return (
    <div className=" card shadow-xl md:card-side">
      <figure>
        <img
        className="rounded h-[360px] w-[310px]"
          src={img}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl md:text-2xl font-serif font-bold">{name}</h2>
        <p><span className="font-semibold">Country : </span>{country}</p>
        <p><span className="font-semibold">Sex : </span>{sex}</p>
        <p><span className="font-semibold">Age : </span>{age}</p>
        <p><span className="font-semibold">Work Experience : </span>{work_experience}</p>
        <p><span className="font-semibold">Best Dish : </span>{best_dish}</p>
        <p><span className="font-semibold">Good With : </span>{good_with}</p>
        <p><span className="font-semibold">Email : </span>{email}</p>
        
      </div>
    </div>
  );
};

export default ChefSingle;
