import React from "react";

function Item({image, name, new_price, old_price}){
    return (
        <div className="w-80 cursor-pointer transform transition duration-[600ms] hover:scale-105">
            <img src={image} alt="" />
            <p className="my-1.5 mx-0">{name}</p>
            <div className="flex gap-5">
                <div className="text-[#374151] text-lg font-semibold">
                    ₹{new_price}
                </div>
                <div className="text-[#8c8c8c] text-lg font-medium line-through">
                    ₹{old_price}
                </div>
            </div>
        </div>
    )
}

export default Item;