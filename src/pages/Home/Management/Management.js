import React, { useState } from 'react';
import img1 from '../../../assets/home/HotelMgt_Catering.jpg'

const Management = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='block mx-auto md:flex flex-row mt-20'>
            <div className='md:w-1/2 '>
                <img className='w-full mt-3 rounded-md' src={img1} alt="" />
            </div>
            {/* for big div */}
            <div className='md:w-1/2 md:ml-5 text-center md:text-start'>
                <h1 className='text-2xl md:text-5xl font-bold mt-2 ctext1'>Outstanding Management Team</h1>
                <div className='hidden md:block'>
                    <h1 className='mt-5'>
                        In Food Ex, where exceptional dining experiences are made possible by our outstanding management team! We take great pride in our skilled professionals who ensure smooth operations and impeccable service.
                        <span className={`${show === false ? 'hidden' : 'flex'}`}>With their expertise and attention to detail, they orchestrate a seamless experience for our guests. From reservation management to attentive customer care, our team ensures that every aspect of your visit is handled with utmost care and efficiency. Our dedicated managers oversee the day-to-day operations, guaranteeing a well-coordinated and enjoyable dining experience. At Food Ex we prioritize good management to create a welcoming atmosphere where you can relax and savor the flavors.</span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 md:-ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
                {/* for small div */}
                <div className='text-start mx-auto ml-2 md:hidden' >
                    <h1 className='mt-5'>
                        In Food Ex, where exceptional dining experiences are made possible by our outstanding management team!
                        <span className={`${show === false ? 'hidden' : 'flex'}`}>We take great pride in our skilled professionals who ensure smooth operations and impeccable service. With their expertise and attention to detail, they orchestrate a seamless experience for our guests. From reservation management to attentive customer care, our team ensures that every aspect of your visit is handled with utmost care and efficiency. Our dedicated managers oversee the day-to-day operations, guaranteeing a well-coordinated and enjoyable dining experience. At [Hotel Name], we prioritize good management to create a welcoming atmosphere where you can relax and savor the flavors.</span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 -ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
            </div>
        </div>
    );
};

export default Management;