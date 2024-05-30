import React, { useContext, useState } from "react";
import { StorageContext } from "../context/StorageContext";
import CartItem from "./CartItem";

function CartList(){
    const {all_product, cartItems, getTotalCartAmount} = useContext(StorageContext);
    return (
        <div className="flex justify-center">
            <div className="my-10 w-3/5">
                <div className="ml-4 grid grid-cols-1 md:grid-cols-5 items-center gap-10 py-5 px-0 text-gray-600 text-base font-semibold text-center">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Total</p>
                    <p>Quantity</p>
                </div>
                <hr className="bg-[#e2e2e2] h-1.5 w-full border-2 rounded" />
                {all_product.map((item, index) => {
                    if(cartItems[item.id] > 0){
                        return <CartItem key={index} {...item} />
                    }
                })}
                <div className="flex my-20">
                    <div className="flex flex-1 flex-col gap-5">
                        <h1 className="ml-4 text-xl font-semibold">Cart Total</h1>
                        <div>
                            <div className="flex justify-between p-4">
                                <p>Subtotal:</p>
                                <p>₹{getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-4">
                                <p>Shipping Fee:</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-4 font-semibold">
                                <h3>Total:</h3>
                                <h3>₹{getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button className="w-48 h-16 outline-none border-none bg-[#ff5a5a] text-white text-base font-semibold">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartList;