import React, { useState } from 'react';
import img1 from '../../../assets/home/Colse_to_home.jpg'

const Location = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='block mx-auto md:flex flex-row mt-20'>
            <div className='md:w-1/2 '>
                <img className='w-full mt-3 rounded-md' src={img1} alt="" />
            </div>
            {/* for big div */}
            <div className='md:w-1/2 md:ml-5 text-center md:text-start'>
                <h1 className='text-2xl md:text-5xl font-bold mt-4 ctext1'>Excellent Location For Food</h1>
                <div className='hidden md:block'>
                    <h1 className='mt-5'>
                        In Food Ex, perfectly situated in an excellent location for food enthusiasts like you! Our prime location ensures convenient access to a plethora of culinary delights
                        <span className={`${show === false ? 'hidden' : 'flex'}`}>allowing you to explore the vibrant food scene nearby. Whether it's renowned restaurants, local eateries, or bustling food markets, you'll find yourself surrounded by a diverse array of dining options. Additionally, our hotel's central position provides easy access to popular attractions and landmarks, allowing you to further immerse yourself in the local culture and flavors. At Food Ex, we understand the importance of location in enhancing your culinary journey. Join us and experience the convenience of our excellent location, where delectable culinary adventures await just steps away from our doors.</span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 md:-ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
                {/* for small div */}
                <div className='text-start mx-auto ml-2 md:hidden' >
                    <h1 className='mt-5'>
                        In Food Ex, perfectly situated in an excellent location for food enthusiasts like you! Our prime location ensures convenient access to a plethora of culinary delights
                        <span className={`${show === false ? 'hidden' : 'flex'}`}>allowing you to explore the vibrant food scene nearby. Whether it's renowned restaurants, local eateries, or bustling food markets, you'll find yourself surrounded by a diverse array of dining options. Additionally, our hotel's central position provides easy access to popular attractions and landmarks, allowing you to further immerse yourself in the local culture and flavors. At Food ex, we understand the importance of location in enhancing your culinary journey. Join us and experience the convenience of our excellent location, where delectable culinary adventures await just steps away from our doors.</span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 -ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
            </div>
        </div>
    );
};

export default Location;