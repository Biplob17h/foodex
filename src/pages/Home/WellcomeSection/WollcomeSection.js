import React, { useState } from 'react';
import img1 from '../../../assets/home/wellcome-removebg-preview.png'

const WollcomeSection = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='block md:flex sm:mx-auto '>
            <div className='md:w-1/2 '>
                <img className='w-full' src={img1} alt="" />
            </div>
            {/* for big div */}
            <div className='md:w-1/2 text-center md:text-start'>
                <h1 className='text-4xl md:text-7xl font-bold opacity-50 ctext1'>Wollcome To</h1>
                <h1 className='text-5xl md:text-8xl font-bold mt-2 ctext1'>Food Ex</h1>
                <div className='hidden md:block' >
                    <h1 className='mt-5'>
                        <span className='text-[17px] font-semibold'>Welcome to Foode Ex, where culinary excellence meets unparalleled hospitality!</span><br /><br />

                        Indulge your taste buds and embark on a gastronomic adventure at our esteemed food hotel. We are proud to present a harmonious fusion of delectable cuisine, <span className={`${show === false ? 'hidden' : 'flex'}`}> luxurious accommodations, and top-notch service , all tailored to create an unforgettable experience for our esteemed guests.

                            Step into our world of culinary delights, where our talented chefs blend creativity and passion to craft exquisite dishes that will tantalize your senses. From international flavors to local specialties, our diverse menus cater to every palate, ensuring a delightful journey through the world of flavors.</span>

                    </h1>
                    <button onClick={show === false ? ()=>{setShow(true)} : ()=>{setShow(false)}} className='btn btn-link cubtn2 md:-ml-4'>{!show ? "Read more" : "Read Less" }</button>
                </div>
                {/* for small div */}
                <div className='text-start md:hidden' >
                    <h1 className='mt-5'>
                        <span className='text-[17px] font-semibold'>Welcome to Foode Ex, where culinary excellence meets unparalleled hospitality!</span><br /><br />

                        Indulge your taste buds and embark on a  <span className={`${show === false ? 'hidden' : 'flex'}`}> gastronomic adventure  at our esteemed food hotel. We are proud to present a harmonious fusion of delectable cuisine, luxurious accommodations, and top-notch service , all tailored to create an unforgettable experience for our esteemed guests.

                            Step into our world of culinary delights, where our talented chefs blend creativity and passion to craft exquisite dishes that will tantalize your senses. From international flavors to local specialties, our diverse menus cater to every palate, ensuring a delightful journey through the world of flavors.</span>

                    </h1>
                    <button onClick={show === false ? ()=>{setShow(true)} : ()=>{setShow(false)}} className='btn btn-link cubtn2 -ml-4'>{!show ? "Read more" : "Read Less" }</button>
                </div>
            </div>
        </div>
    );
};

export default WollcomeSection;