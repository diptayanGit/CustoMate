import React from "react";
import { Link } from "react-router-dom";

function Signup(){
    return(
        <div className="w-full h-[85vh] bg-[#fce3fe] flex flex-col justify-center">
            <div className="w-[40vw] h-[60vh] flex flex-col mx-auto justify-center bg-white px-10">
                <h1 className="text-3xl mb-8 text-center">Sign-up</h1>
                <div className="flex flex-col gap-8">
                    <input className="h-10 w-full outline-none pl-5 border border-solid border-[#c9c9c9] text-[#5c5c5c] text-base" type="text" placeholder="Enter username" />
                    <input className="h-10 w-full outline-none pl-5 border border-solid border-[#c9c9c9] text-[#5c5c5c] text-base" type="text" placeholder="Enter Email" />
                    <input className="h-10 w-full outline-none pl-5 border border-solid border-[#c9c9c9] text-[#5c5c5c] text-base" type="text" placeholder="Enter Password" />
                </div>
                <button className="h-10 text-white bg-[#ff4141] mt-7 mb-4 border-none text-xl font-medium cursor-pointer">Continue</button>
                <p className="text-[#5c5c5c]">Already have an account ? <Link to='/login' className="text-[#ff4141] font-semibold cursor-pointer">Login here</Link></p>
                <div className="flex items-center gap-2 text-[#5c5c5c] text-base font-medium">
                    <input type="checkbox" name="" id="" />
                    <p>Agree to policy</p>
                </div>
            </div>
        </div>
    )
}

export default Signup;