import React from "react";
import footer_logo from './Assets/logo_big.png'

function Footer(){
    return(
        <div className="flex flex-col justify-center items-center mt-8 gap-10">
            <div className="flex items-center gap-5">
                <img src={footer_logo} alt="" />
                <p className="text-[#383838] text-5xl font-bold">SHOOPIE</p>
            </div>
            <ul className="flex list-none gap-12 text-[#252525] text-xl">
                <li className="cursor-pointer">Products</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
            <div className="flex flex-col items-center gap-7 w-full mb-7 text-[#1a1a1a] text-xl">
                <hr className="w-4/5 border-none rounded-xl h-1 bg-[#c7c7c7]" />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer;