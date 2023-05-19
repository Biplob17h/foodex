/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import './../Shared/style.css'
import { Link } from 'react-router-dom';



const FrontPage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://ewenbell.com/10k/hdcache/Special/honeycomb-6878.jpg")` }}>
            <div>
                <h1 className='text-5xl font-serif font-bold'>Wellcome To</h1>
            </div>
            <div className="hero-overlay bg-opacity-60 flex md:justify-end">
                <Link to='/home'><button className='btn btn-ghost w-[200px] text-white mt-5 cbtn1 mr-5'>Go To Home</button></Link>
                <Link to='/home/order'><button className='btn btn-ghost w-[200px] text-white mt-5 cbtn1 mr-5'>Order Food</button></Link>
            </div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className='text-5xl font-serif font-bold mt-32 text-red-300'> Food Ex</h1>
                </div>
            </div>
        </div>
    );
};

export default FrontPage;


