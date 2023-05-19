import React, { useState } from 'react';
import img1 from '../../../assets/home/Chefes_02.jpg'

const FoodQuality = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='block mx-auto md:flex flex-row mt-20'>
            <div className='md:w-1/2 '>
                <img className='w-full mt-3 rounded-md' src={img1} alt="" />
            </div>
            {/* for big div */}
            <div className='md:w-1/2 md:ml-5 text-center md:text-start'>
                <h1 className='text-2xl md:text-5xl font-bold mt-2 ctext1'>50+ Expart Chef At Your Service</h1>
                <div className='hidden md:block'>
                    <h1 className='mt-5'>
                        In Food Ex, where culinary excellence is brought to life by our team of over 50 expert chefs! Prepare to embark on a remarkable gastronomic journey as our highly skilled culinary artists showcase their passion and expertise. 
                        <span className={`${show === false ? 'hidden' : 'flex'}`}> Our dedicated chefs are passionate about crafting mouthwatering dishes that will satisfy even the most discerning palates. From farm-fresh produce to premium meats and seafood, we source only the finest ingredients to ensure a memorable dining experience. Immerse yourself in the inviting ambiance of our food hotel, where every bite is a delightful journey. Whether you're craving international cuisine or local specialties, our diverse menu offers a wide range of options to suit your taste. Our commitment to good food extends beyond taste, as we also prioritize presentation and attention to detail. </span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 md:-ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
                {/* for small div */}
                <div className='text-start mx-auto ml-2 md:hidden' >
                    <h1 className='mt-5'>
                    In Food Ex where culinary excellence is brought to life by our team of over 50 expert chefs! <span className={`${show === false ? 'hidden' : 'flex'}`}>   Prepare to embark on a remarkable gastronomic journey as our highly skilled culinary artists showcase their passion and expertise. With their extensive experience and creative flair, our chefs are dedicated to delivering extraordinary dining experiences that will leave you speechless. Each dish is a masterpiece, carefully crafted with meticulous attention to detail, innovative flavor combinations, and stunning presentation. From indulging in delectable international cuisine to savoring local specialties, our expert chefs will take your taste buds on a sensational adventure. At Food Ex, we are proud to have assembled a team of culinary geniuses who continually push the boundaries of culinary excellence. Join us and experience the magic of their culinary artistry firsthand as they transform fresh, high-quality ingredients into unforgettable culinary delights.</span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 -ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
            </div>
        </div>
    );
};

export default FoodQuality;