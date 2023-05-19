import React, { useState } from 'react';
import img1 from '../../../assets/home/food quilaty.jpg'

const FoodQuality = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='block mx-auto md:flex flex-row-reverse mt-20'>
            <div className='md:w-1/2 '>
                <img className='w-full rounded-md' src={img1} alt="" />
            </div>
            {/* for big div */}
            <div className='md:w-1/2 text-center md:text-start'>
                <h1 className='text-2xl md:text-5xl font-bold mt-2 ctext1'>Top Quality Food To Enjoy</h1>
                <div className='hidden md:block'>
                    <h1 className='mt-5'>
                        In Food Ex, where exceptional food quality is our top priority! Indulge in a culinary experience like no other as we deliver delicious flavors and ingredients of the highest quality.
                        <span className={`${show === false ? 'hidden' : 'flex'}`}> Our dedicated chefs are passionate about crafting mouthwatering dishes that will satisfy even the most discerning palates. From farm-fresh produce to premium meats and seafood, we source only the finest ingredients to ensure a memorable dining experience. Immerse yourself in the inviting ambiance of our food hotel, where every bite is a delightful journey. Whether you're craving international cuisine or local specialties, our diverse menu offers a wide range of options to suit your taste. Our commitment to good food extends beyond taste, as we also prioritize presentation and attention to detail. Join us at [Hotel Name] and savor the essence of culinary excellence, where our passion for good food shines through in every dish. </span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 md:-ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
                {/* for small div */}
                <div className='text-start mx-auto ml-2 md:hidden' >
                    <h1 className='mt-5'>
                        In Food Ex, where exceptional food quality is our top priority!<span className={`${show === false ? 'hidden' : 'flex'}`}>  Indulge in a culinary experience like no other as we deliver delicious flavors and ingredients of the highest quality. Our dedicated chefs are passionate about crafting mouthwatering dishes that will satisfy even the most discerning palates. From farm-fresh produce to premium meats and seafood, we source only the finest ingredients to ensure a memorable dining experience. Immerse yourself in the inviting ambiance of our food hotel, where every bite is a delightful journey. Whether you're craving international cuisine or local specialties, our diverse menu offers a wide range of options to suit your taste. Our commitment to good food extends beyond taste, as we also prioritize presentation and attention to detail. Join us at [Hotel Name] and savor the essence of culinary excellence, where our passion for good food shines through in every dish.</span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 -ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
            </div>
        </div>
    );
};

export default FoodQuality;