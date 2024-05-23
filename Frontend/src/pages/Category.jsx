import React, { useContext } from "react";
import { StorageContext } from "../context/StorageContext"; 
import dropdown from '../components/Assets/dropdown_icon.png'
import Item from "../components/Item";

function Category({banner, category}){
    const {all_product} = useContext(StorageContext)
    return (
        <div>
            <img className="block my-7 mx-auto w-4/5" src={banner} alt="" />
            <div className="flex my-0 mx-40 justify-between items-center">
                <p>
                    <span className="font-semibold">Showing 1- 12</span> out of 36 products
                </p>
                <div className="flex py-2.5 px-5 rounded-[40px] border border-solid border-[#888]">
                    Sort by <img className="pl-1 object-contain" src={dropdown} alt="" />
                </div>
            </div>
            <div className="mx-16 my-10 flex justify-center flex-wrap gap-10">
                {all_product.map((item, index) => (
                    item.category===category ? <Item key={index} {...item} /> : null
                ))}
            </div>
            <div className="flex justify-center items-center bg-[#ededed] h-20 w-40 mx-auto text-center rounded-3xl font-medium
            text-lg cursor-pointer">
                Explore More
            </div>
        </div>
    )
}

export default Category;