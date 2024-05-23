import React from "react";
import { Link } from "react-router-dom";
import arrow_icon from './Assets/breadcrum_arrow.png';

function Breadcrum({category, name}){
    return (
        <div className="flex items-center text-[#363636] text-base font-semibold gap-3">
            <Link to='/' className="pb-1">Shop</Link> 
            <img className="h-4 object-contain" src={arrow_icon} alt="" /> 
            <Link to={`/${category}`} className="pb-1">{category.charAt(0).toUpperCase() + category.substr(1)}</Link> 
            <img className="h-4 object-contain" src={arrow_icon} alt="" /> 
            <div className="pb-1">{name}</div>
        </div>
    )
}

export default Breadcrum;