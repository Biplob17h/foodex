import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/food_ex_logo-removebg-preview.png'

const Header = () => {
    return (
        <div className="navbar justify-between bg-base-100">
            {/*header for small device */}
            <div className="navbar-start md:hidden">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <div className='flex justify-between items-center mr-10'>
                            <img className='rounded-full w-16' src="https://i.postimg.cc/QxcY1gJy/IMG-20230319-104909.jpg" alt="" />
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <Link to='/home' className='font-semibold mt-3 pl-3 '>Home</Link>
                        <Link to='/home/order' className='font-semibold mt-1 pl-3'>Order</Link>
                        <Link to='/home/chef' className='font-semibold mt-1 pl-3'>Chef</Link>
                        <Link to='/home/blog' className='font-semibold mt-1 pl-3' >Blog</Link>
                        <Link to='/home/aboutUs' className='font-semibold mt-1 pl-3'>About Us</Link>
                    </ul>
                </div>
            </div>
            {/* logo */}
            <Link to='/'>
                <div className="w-[100px]">
                    <img src={img} alt="company logo" />
                </div>
            </Link>
            {/* header for big  device*/}
            <div>
                <div className='hidden md:flex mr-10'>
                    <Link to='/home'><button className='btn btn-ghost cbtn1 mx-[2px]'>Home</button></Link>
                    <Link to='/home/order'><button className='btn btn-ghost cbtn1 mx-[2px]'>Order</button></Link>
                    <Link to='/home/chef'><button className='btn btn-ghost cbtn1 mx-[2px]'>Chef</button></Link>
                    <Link to='/home/blog'><button className='btn btn-ghost cbtn1 mx-[2px]'>Blog</button></Link>
                    <Link to='/home/aboutUs'><button className='btn btn-ghost cbtn1 mx-[2px]'>About Us</button></Link>
                </div>
                <div className="hidden md:flex">
                    <div className="dropdown dropdown-end mr-3">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.postimg.cc/QxcY1gJy/IMG-20230319-104909.jpg" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

