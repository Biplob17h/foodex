import React, { useState } from 'react';
import img1 from '../../../assets/home/decoration.jpg'

const Decoration = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='block mx-auto md:flex flex-row-reverse mt-20'>
            <div className='md:w-1/2 '>
                <img className='w-full mt-3 rounded-md ' src={img1} alt="" />
            </div>
            {/* for big div */}
            <div className='md:w-1/2 text-center md:text-start'>
                <h1 className='text-2xl md:text-5xl font-bold mt-2 ctext1'>Thoughtfully Design Hotel Decoration</h1>
                <div className='hidden md:block mr-3'>
                    <h1 className='mt-5'>
                        In Food Ex,where our dedication to décor elevates your dining experience! We believe that ambiance plays a vital role in creating a memorable atmosphere.
                        <span className={`${show === false ? 'hidden' : 'flex'}`}>Our thoughtfully designed décor harmoniously blends elegance and comfort, providing a visually appealing setting for your culinary journey. From tasteful lighting to stylish furnishings, every element is carefully chosen to enhance your enjoyment. Our attention to detail extends to table settings, floral arrangements, and artistic accents, ensuring a visually captivating environment. Step into our food hotel and immerse yourself in an inviting atmosphere that stimulates your senses and creates a warm and welcoming ambiance.</span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 md:-ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
                {/* for small div */}
                <div className='text-start mx-auto ml-2 md:hidden' >
                    <h1 className='mt-5'>
                    In Food Ex, where our dedication to décor elevates your dining experience! We believe that ambiance plays a vital role in creating a memorable atmosphere.<span className={`${show === false ? 'hidden' : 'flex'}`}>Our thoughtfully designed décor harmoniously blends elegance and comfort, providing a visually appealing setting for your culinary journey. From tasteful lighting to stylish furnishings, every element is carefully chosen to enhance your enjoyment. Our attention to detail extends to table settings, floral arrangements, and artistic accents, ensuring a visually captivating environment. Step into our food hotel and immerse yourself in an inviting atmosphere that stimulates your senses and creates a warm and welcoming ambiance.</span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 -ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
            </div>
        </div>
    );
};

export default Decoration;