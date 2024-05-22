import React from "react";
import hand_icon from './Assets/hand_icon.png'
import arrow_icon from './Assets/arrow.png'
import hero_img from './Assets/hero_image.png'

function Hero(){
    return (
        <div className="h-screen bg-custom-gradient flex">
            <div className="flex flex-1 flex-col justify-center gap-5 pl-44 leading-[1.1]">
                <h2 className="text-[#090909] text-[26px] font-semibold">New Arrivals Only</h2>
                <div>
                    <div className="flex items-center gap-5">
                       <p className="text-[#171717] text-[100px] font-bold">new</p> 
                       <img className="w-[105px]" src={hand_icon} alt="" />
                    </div>
                    <p className="text-[#171717] text-[100px] font-bold">Collections</p>
                    <p className="text-[#171717] text-[100px] font-bold">For everyone</p>
                </div>
                <div className="flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-8 bg-[#ff4141] text-white text-[22px] font-medium cursor-pointer">
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img className="w-3/5" src={hero_img} alt="" />
            </div>
        </div>
    )
}

export default Hero;