import React from "react";

function Item({image, name, new_price, old_price}){
    return (
        <div className="">
            <img src={image} alt="" />
            <p className="">{name}</p>
            <div className="">
                {new_price}
            </div>
            <div className="">
                {old_price}
            </div>
        </div>
    )
}

export default Item;