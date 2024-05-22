import React from "react";

function NewsLetter(){
    return (
        <div className="bg-custom-gradient w-[70%] h-2/5 flex flex-col items-center justify-center m-auto py-10 px-36 mb-36 gap-8">
            <h1 className="text-[#454545] text-5xl font-semibold">Get Exclusive offers on your Email</h1>
            <p className="text-[#454545] text-xl">Subscribe to our news-letter and stay updated</p>
            <div className="flex items-center justify-between bg-white w-[70vh] h-16 border border-solid border-[#e3e3e3] rounded-[80px]">
                <input className="w-[55vh] ml-7 border-none outline-none text-[#616161] text-base" type="email" placeholder="Your Email ID" />
                <button className="w-[15vw] h-16 rounded-[80px] bg-black text-white text-base cursor-pointer">Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;