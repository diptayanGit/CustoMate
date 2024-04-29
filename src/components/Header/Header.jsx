import React from "react";
import { Route, Link } from "react-router-dom";

function Header(){
    return(
        <nav className="flex justify-between w-full h-12 bg-slate-300 px-4 items-center">
            <div to='/menu'>Menu</div>
            <div to='/'>Shoppie</div>
            <div to='/cart'>Cart</div>
        </nav>
    )
}

export default Header;