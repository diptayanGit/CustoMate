import React, { createContext } from "react";
import all_product from '../components/Assets/all_product'

export const StorageContext = createContext(null);

export const ContextProvider = ({children}) => {
    const contextValue = {all_product};

    return (
        <StorageContext.Provider value={contextValue}>
            {children}
        </StorageContext.Provider>
    )
}