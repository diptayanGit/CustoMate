import React, { useContext } from "react";
import { StorageContext } from "../context/StorageContext";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { Link } from "react-router-dom";


function CartItem({id, name, image, new_price}){
    const {cartItems, addToCart, removeFromCart} = useContext(StorageContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-10 py-5 px-0 text-gray-600 text-base font-semibold text-center ml-4">
            <Link to={`/product/${id}`}>
                <img src={image} alt="" />
            </Link>
            <Link to={`/product/${id}`}>
                <p>{name}</p>
            </Link>
            <p>₹{new_price}</p>
            <p>₹{Number(new_price) * Number(cartItems[id])}</p>
            <div className="w-28 flex justify-between items-center">
                <IoIosRemoveCircle className="cursor-pointer" size={28} onClick={()=>removeFromCart(id)} />
                <input className="w-10 h-10 text-center border border-solid border-[#b6b6b6]" type="text" disabled value={cartItems[id]} />
                <IoIosAddCircle className="cursor-pointer" size={28} onClick={()=>addToCart(id)} />
            </div>
            <hr className="bg-[#e2e2e2] h-0.5 w-[58vw] border-2 rounded" />
        </div>
    )
}

export default CartItem;