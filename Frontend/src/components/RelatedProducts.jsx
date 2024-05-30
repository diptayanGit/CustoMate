import React from "react";
import data_product from './Assets/data'
import Item from "./Item";

function RelatedProducts(){
    return (
        <div className="mt-16 flex flex-col items-center gap-2.5 h-[90vh]">
            <h1 className="text-[#171717] text-5xl font-semibold">Related Products</h1>
            <hr className="mt-5 w-52 h-1.5 rounded-lg border-4 border-[#252525]" />
            <div className="mt-8 flex gap-7">
                {data_product.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts;