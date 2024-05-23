import React from "react";
import star_icon from './Assets/star_icon.png'
import star_dull_icon from './Assets/star_dull_icon.png'

function ProductDisplay({name, image, new_price, old_price, category}){
    return (
        <div className="flex my-5">
            <div className="flex gap-5 w-1/2">
                <div className="flex flex-col mt-3 gap-4">
                    <img className="h-[12vh]" src={image} alt="" />
                    <img className="h-[12vh]" src={image} alt="" />
                    <img className="h-[12vh]" src={image} alt="" />
                    <img className="h-[12vh]" src={image} alt="" />
                </div>
                <div>
                    <img className="h-[60vh]" src={image} alt="" />
                </div>
            </div>
            <div className="mx-16 flex flex-col">
                <h1 className="text-[#3d3d3d] text-3xl font-bold">{name}</h1>
                <div className="flex items-center mt-4 gap-1.5 text-[#1c1c1c] text-base">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(52)</p>
                </div>
                <div className="flex my-10 gap-7 text-xl font-bold">
                    <div className="text-[#818181] line-through">₹{old_price}</div>
                    <div className="text-[#ff4141]">₹{new_price}</div>
                </div>
                <div>
                    <h1 className="text-[#656565] text-xl font-semibold">Select Size</h1>
                    <div className="flex my-5 gap-5">
                        <div className="h-12 w-12 flex flex-col justify-center bg-[#eaeaea] border border-solid border-[#bebebe] rounded-md text-center cursor-pointer">S</div>
                        <div className="h-12 w-12 flex flex-col justify-center bg-[#eaeaea] border border-solid border-[#bebebe] rounded-md text-center cursor-pointer">M</div>
                        <div className="h-12 w-12 flex flex-col justify-center bg-[#eaeaea] border border-solid border-[#bebebe] rounded-md text-center cursor-pointer">L</div>
                        <div className="h-12 w-12 flex flex-col justify-center bg-[#eaeaea] border border-solid border-[#bebebe] rounded-md text-center cursor-pointer">XL</div>
                    </div>
                </div>
                <button className="w-48 h-12 text-base font-semibold text-white bg-[#ff4141] border-none outline-none cursor-pointer">ADD TO CART</button>
                <p className="mt-3">Category: <span className="font-semibold">{category.charAt(0).toUpperCase() + category.substr(1)}</span></p>
            </div>
        </div>
    )
}

export default ProductDisplay;