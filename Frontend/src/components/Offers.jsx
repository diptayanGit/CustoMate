import React from "react";
import exclusive_image from './Assets/exclusive_image.png'
function Offers(){
    return (
        <div className="w-[80%] h-[70vh] flex m-auto py-0 px-32 mb-40 bg-gradient-to-b from-custom-start to-custom-end">
            <div className="flex flex-1 flex-col justify-center gap-4">
               <h1 className="text-[#171717] text-7xl font-semibold">Exclusive</h1>
               <h1 className="text-[#171717] text-7xl font-semibold">Offers for you</h1>
               <p className="text-[#171717] text-xl font-semibold">ONLY BEST SELLERS PRODUCT</p> 
               <button className="w-52 h-16 rounded-[30px] bg-[#ff4141] border-none text-white text-xl font-medium mt-7 cursor-pointer">Check now</button>
            </div>
            <div className="flex flex-1 items-center justify-end pt-5">
                <img className="h-[90%]" src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers;