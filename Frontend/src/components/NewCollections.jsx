import React from "react";
import Item from './Item';
import new_collections from './Assets/new_collections'

function NewCollections(){
    return (
        <div className="flex flex-col items-center gap-8 min-h-[90vh] mb-20">
            <h1 className="text-[#171717] text-5xl font-semibold">New Collections</h1>
            <hr className="w-52 h-1.5 rounded-lg border-4 border-[#252525]" />
            <div className="flex justify-center flex-wrap mt-12 gap-10">
                {new_collections.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default NewCollections;