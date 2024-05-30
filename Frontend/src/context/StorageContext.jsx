import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'

export const StorageContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

export const ContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1 }))
    }
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(let item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * Number(cartItems[item]);
            }
        }
        return totalAmount;
    }
    
    const getTotalItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalItems};

    return (
        <StorageContext.Provider value={contextValue}>
            {children}
        </StorageContext.Provider>
    )
}