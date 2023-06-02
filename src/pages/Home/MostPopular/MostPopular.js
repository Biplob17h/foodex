import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MostPopular = ({  setViewType }) => {
    const [foods, setFoods] = useState([]);

    useState(() => {
        fetch('popular.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
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
                    infinite: true
                }
            }
        ]
    };
    return (
        <div className='mt-20 text-center'>
            <div className="block text-start pl-5 md:pl-0 md:flex md:justify-between">
                <h1 className='text-2xl md:text-5xl text-start md:pl-5 font-bold ctext4 text-red-600'>Most order food by others</h1>
                <div  onClick={() => { setViewType('today') }} className="mt-5 md:mt-0 text-xl md:text-2xl cursor-pointer font-bold swap-on ctext2">Your Order</div>
            </div>
            {/* small device */}
            <div className=" md:hidden">
                <Slider {...settings}>
                    {
                        foods?.map(food =>
                            <div key={food._id}>
                                <div className="card w-full bg-base-100 cushover1  shadow-xl mt-5">
                                    <img className="w-full h-[300px] rounded-md" src={food?.img} alt="Shoes" />
                                    <div className="card-body text-start">
                                        <h2 className="card-title ">{food?.name}</h2>
                                        <p className=""><span className="font-semibold">Price</span> : {food?.price}$</p>
                                        <p className=""><span className="font-semibold">Country</span> : {food?.country}</p>
                                        <p className=""><span className="font-semibold">Total Order</span> : {food?.orderTime}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary mt-5">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
            <div className="hidden md:block">
                <Slider {...settings}>
                    {
                        foods?.map(food =>
                            <div key={food._id}>
                                <div className="card cuscard bg-base-100 relative mx-auto rounded-lg w-[300px] cushover1  shadow-xl mt-10 overflow-hidden">
                                    <figure><img className="w-[300px] h-[350px] bg-cover rounded-md" src={food?.img} alt="food img" /></figure>
                                    <div className="absolute cuscard-body rounded-lg p-5 -right-full text-start text-white w-full h-full cusCardBody">
                                        <h2 className="card-title text-2xl">{food?.name}</h2>
                                        <p className=""><span className="font-semibold">Price</span> : {food?.price}$</p>
                                        <p className=""><span className="font-semibold">Country</span> : {food?.country}</p>
                                        <p className=""><span className="font-semibold">Total Order</span> : {food?.orderTime}</p>
                                        <p className=""><span className="font-semibold">Description</span> : {food?.dis.slice(0, 130)}</p>
                                        <div className=" justify-start absolute pl-3 bottom-0">
                                            <button className="btn btn-ghost text-red-600 cbtn1  mx-auto w-[230px]">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>

        </div>
    );
};

export default MostPopular;