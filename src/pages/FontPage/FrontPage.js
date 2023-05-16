/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import img from '../../assets/ezgif.com-webp-to-jpg.jpg'
import './../Shared/style.css'
import { Link } from 'react-router-dom';


const FrontPage = () => {
    return (
        <div className='text-center' >
            {/* <marquee
                className="cusmarque"
                scrollamount="12"
                direction="right"
                behavior="alternate"
                
            >
                Wellcome
            </marquee> */}
            <h1 className='text-9xl font-bold text-red-500'>Wellcome</h1>
            <Link to="/home"><button className='btn btn-success'>Home</button></Link>
        </div>
    );
};

export default FrontPage;


