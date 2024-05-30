import React, { useContext } from "react";
import star_icon from './Assets/star_icon.png'
import star_dull_icon from './Assets/star_dull_icon.png'
import { StorageContext } from '../context/StorageContext'

function ProductDisplay({id, name, image, new_price, old_price, category}){
    const {addToCart} = useContext(StorageContext);
    return (
        <div className="flex my-5">
            <div className="w-2/5">
                <img className="object-contain" src={image} alt="" />
            </div>
            <div className="ml-5 flex flex-col">
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
                <button 
                    className="w-full md:w-48 h-10 md:h-12 text-base font-semibold text-white bg-[#ff4141] active:bg-[#ff8080] border-none outline-none cursor-pointer"
                    onClick={() => addToCart(id)}
                >
                    ADD TO CART
                </button>
                <p className="mt-3">Category: <span className="font-semibold">{category.charAt(0).toUpperCase() + category.substr(1)}</span></p>
            </div>
        </div>

    )
}

export default ProductDisplay;