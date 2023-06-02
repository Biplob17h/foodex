import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from "react-hot-toast";
import RecentlySingle from "./RecentlySingle";


const Recently = ({ setViewType }) => {
  const [foods, setFoods] = useState([]);
  

  useState(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="mt-20 text-center">
      <div className="text-start md:flex justify-between">
        <h1 className="text-2xl md:text-5xl text-start pl-5 font-bold text-green-300">
          Today's favourite
        </h1>
      </div>
      {/* small device */}
      <div className=" md:hidden">
        <Slider {...settings}>
          {foods?.map((food) => (
            <div key={food._id}>
              <div className="card w-full bg-base-100 cushover1  shadow-xl mt-5">
                <img
                  className="w-full h-[300px] rounded-md"
                  src={food?.img}
                  alt="Shoes"
                />
                <div className="card-body text-start">
                  <h2 className="card-title ">{food?.name}</h2>
                  <p className="">
                    <span className="font-semibold">Price</span> : {food?.price}
                    $
                  </p>
                  <p className="">
                    <span className="font-semibold">Country</span> :{" "}
                    {food?.country}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary mt-5">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden md:block">
        <Slider {...settings}>
          {foods?.map((food) => (
            <RecentlySingle 
            key={food._id}
            food={food}
            >
              
            </RecentlySingle>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recently;
