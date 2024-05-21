import React, { useState } from "react";
import logo from './Assets/logo.png'
import cart_icon from './Assets/cart_icon.png'
import { Link, NavLink } from "react-router-dom";

function Navbar(){
    return (
        <nav className="flex justify-around py-2 shadow-md">
            <div className="flex items-center gap-[10px]">
                <Link to='/'>
                    <img src={logo} alt="shoppie_logo" />
                    <p className="text-gray-900 text-2xl font-semibold">SHOPPIE</p>
                </Link>
            </div>
            <ul className="flex items-center list-none gap-12 text-gray-600 text-xl font-medium">
                <li>
                    <NavLink 
                    to='/' 
                        className={({isActive}) => `flex flex-col items-center justify-center gap-10 cursor-pointer ${isActive ? `text-red-500`: `text-gray-900`}`}
                    >
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/men' 
                        className={({isActive}) => `flex flex-col items-center justify-center gap-10 cursor-pointer ${isActive ? `text-red-500`: `text-gray-900`}`}
                    >
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/women' 
                        className={({isActive}) => `flex flex-col items-center justify-center gap-10 cursor-pointer ${isActive ? `text-red-500`: `text-gray-900`}`}
                    >
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/kids' 
                        className={({isActive}) => `flex flex-col items-center justify-center gap-10 cursor-pointer ${isActive ? `text-red-500`: `text-gray-900`}`}
                    >
                        Kids
                    </NavLink>
                </li>
            </ul>
            <div className="flex items-center gap-11">
                <Link to='/login'>
                    <button className="w-[157px] h-[58px] border border-solid border-gray-700 rounded-full text-gray-600 text-lg font-semibold bg-white cursor-pointer active:bg-gray-200">
                        Login
                    </button>
                </Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count w-[20px] h-[25px] flex justify-center items-center mt-[-35px] ml-[-52px] rounded-[10px] text-[14px] bg-red-500 text-white">0</div>
            </div>
        </nav>
    )
}

export default Navbar;