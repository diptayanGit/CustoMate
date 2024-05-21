import React, {forwardRef, useId, useState} from "react";
import Button from "./Button";

function Input({
    label,
    className = '',
    type = 'text',
    placeholder= "Enter here",
    disabled = true,
    ...props
}, ref){
    const id = useId();
    const [checkType, setCheckType] = useState(!disabled);
    return(
        <div className="w-full">
            {label && <label htmlFor={id}>{label}</label>}
            <input 
                type={checkType ? "password" : "text"} 
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
                placeholder={placeholder} 
                id={id} 
                ref={ref} 
                {...props}
            />

            {!disabled && <Button
                type="button"
                bgColor="bg-white"
                textColor="text-black"
                className="w-20 hover:bg-slate-300 duration-200 ease-in"
                onClick={(e) => checkType ? setCheckType(false) : setCheckType(true)}
            >
                {checkType ? "Show" : "Hide"}
            </Button>}
        </div>
    )
}

export default forwardRef(Input);