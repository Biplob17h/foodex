import React, { useState } from 'react';
import img1 from '../../../assets/home/Hotel_enver.jpg'

const Environment = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='block mx-auto md:flex flex-row-reverse mt-20'>
            <div className='md:w-1/2 '>
                <img className='w-full mt-3 rounded-md ' src={img1} alt="" />
            </div>
            {/* for big div */}
            <div className='md:w-1/2 text-center md:mx-3 md:text-start'>
                <h1 className='text-2xl md:text-5xl font-bold mt-2 ctext1 '>Fresh And Organised Environment</h1>
                <div className='hidden md:block'>
                    <h1 className='mt-5'>
                        In Food Ex,where a fresh and organized environment enhances your dining experience! We believe in creating a vibrant atmosphere that complements our delicious cuisine.
                        <span className={`${show === false ? 'hidden' : 'flex'}`}> Step into a space that exudes cleanliness, inviting you to relax and savor every moment. Our commitment to maintaining a fresh environment ensures that your dining experience is elevated to new heights. From spotless dining areas to well-organized seating arrangements, we strive to provide a pleasant ambiance that enhances your enjoyment. At Food Ex, we understand the importance of a clean and organized space in creating a memorable dining experience. Our dedicated team works tirelessly to ensure that every corner of our hotel reflects our commitment to excellence.</span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 md:-ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
                {/* for small div */}
                <div className='text-start mx-auto ml-2 md:hidden' >
                    <h1 className='mt-5'>
                    In Food Ex, where a fresh and organized environment enhances your dining experience!<span className={`${show === false ? 'hidden' : 'flex'}`}> We believe in creating a vibrant atmosphere that complements our delicious cuisine. Step into a space that exudes cleanliness, inviting you to relax and savor every moment. Our commitment to maintaining a fresh environment ensures that your dining experience is elevated to new heights. From spotless dining areas to well-organized seating arrangements, we strive to provide a pleasant ambiance that enhances your enjoyment. At Food Ex, we understand the importance of a clean and organized space in creating a memorable dining experience. Our dedicated team works tirelessly to ensure that every corner of our hotel reflects our commitment to excellence. Join us and indulge in the finest culinary offerings in a refreshing and organized environment, where your comfort and satisfaction are our top priorities. </span>

                    </h1>
                    <button onClick={show === false ? () => { setShow(true) } : () => { setShow(false) }} className='btn btn-link cubtn2 -ml-4'>{!show ? "Read more" : "Read Less"}</button>
                </div>
            </div>
        </div>
    );
};

export default Environment;