import React from "react";
import data_product from './Assets/data'
import Item from "./Item";

function Popular(){
    return (
        <div className="flex flex-col items-center gap-8 h-[90vh]">
            <h1 className="text-[#171717] text-5xl font-semibold">Popular in Women</h1>
            <hr className="w-52 h-1.5 rounded-lg bg-[#252525]" />
            <div className="flex gap-8">
                {data_product.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Popular;