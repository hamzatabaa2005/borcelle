const hoverStyleBtn = " relative before:absolute before:inset-s-0 before:inset-bs-0 hover:before:inset-0 before:bg-pink-200/20 before:z-10 "

export const BrandBtn = ({ title, btnStyle, ...props }) => {
    return (
        <button className={` bg-pink-700  px-3 py-2 my-2 text-center text-white disabled:bg-pink-950 hover:bg-pink-200/70 cursor-pointer ${btnStyle}`}
            {...props} >{title ? title : "btn"}</button>
    )
}

export const DefaultBtn = ({ title, btnStyle, icon, ...props }) => {
    return (
        <button className={`bg-white px-3 py-2   text-black  shadow-[0_0_5px_1px] shadow-pink-700   ${hoverStyleBtn} before:bg-pink-900/50 cursor-pointer flex gap-2 justify-center items-center ${btnStyle} `} {...props} > {icon ? <span>{icon}</span> : <></>}  {title ? title : "btn"} </button>

    )
}

import { NavLink } from "react-router"

export const BrandLink = ({ title, path, btnStyle, ...props }) => {
    return (
        <NavLink to={path} className={`bg-pink-700  px-3 py-2 text-center text-white cursor-pointer ${btnStyle}`} {...props}>{title ? title : "btn"}</NavLink>
    )
}

export const DefaultLink = ({ title, path, btnStyle, icon, ...props }) => {
    return (
        <NavLink to={path} className={`bg-white px-3 py-2  text-center text-black  my-2 ${hoverStyleBtn} before:bg-pink-900/50 cursor-pointer inline-flex gap-2 items-center justify-center ${btnStyle} `} {...props}>{title ? title : "btn"}<span>{icon ? icon : ""}</span></NavLink>
    )
}

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from "react"

export const DropDown = ({ title, styleDrop = "", styleMenu = "", children }) => {
    const [isHidden, setIsHidden] = useState(true)
    return (
        <div className="relative ">
            <div className={`border-solid border-gray-400 border px-5 py-2 rounded cursor-pointer  flex gap-2  bg-white shadow-md items-center select-none dark:bg-gray-700 dark:text-white dark:border-pink-700 ${styleDrop}`} onClick={() => {
                setIsHidden(!isHidden)
            }} >
                {title}
                <ChevronDown className="h-5" />

            </div>

            <div className={`rounded border border-gray-300 bg-white dark:bg-gray-700 dark:text-white z-50  absolute top-11 w-52 shadow-md ${isHidden ? "hidden" : ""} ${styleMenu}`}>

                {children}
            </div>
        </div>

    )
}

export const DropUp = ({ title, styleDrop, styleMenu = "", children }) => {
    const [isHidden, setIsHidden] = useState(true)
    return (
        <div className="relative ">
            <div className={`border-solid border-gray-400 border px-5 py-2 rounded cursor-pointer  flex gap-2  bg-white shadow-md items-center select-none dark:bg-gray-700 dark:text-white ${styleDrop}`} onClick={() => {
                setIsHidden(!isHidden)
            }}>
                {title}
                <ChevronUp className="h-5" />

            </div>

            <div className={`rounded border] border-gray-300 bg-white  absolute bottom-10 -inset-s-6.25  w-52 shadow-md ${isHidden ? "hidden" : ""} ${styleMenu}`}>

                {children}
            </div>
        </div>

    )
}

export const LinkWithICon = ({ icon, title, link, linkStyle }) => {
    return (
        <NavLink to={link}
            className={`text-gray-500 text-center hover:text-pink-500 transition-colors duration-500 flex items-center justify-center gap-2 ${linkStyle}`} >{icon} {title}</NavLink>
    )
}


export const BrandInput = ({ placeholder, icon, divStyle, inputStyle, iconStyle, ...props }) => {
    return (
        <div className={`relative rounded-lg  border-gray-500 ${divStyle}`}>   <input {...props} className={`bg-white focus:outline-none rounded-lg px-3 py-2 w-full caret-pink-700 dark:bg-gray-700 dark:text-white  ${inputStyle} `} placeholder={placeholder} />
            {icon ? <span className={`text-pink-700 text-xl absolute inset-e-4 inset-y-0 inset-bs-3 ${iconStyle}`}>{icon}</span> : <></>}    </div>
    )
}


export const BrandAreaInput = ({ placeholder, icon, divStyle, inputStyle, iconStyle, ...props }) => {
    return (
        <div className={`relative rounded-lg  border-gray-500 ${divStyle}`}>           <textarea className={`bg-white focus:outline-none rounded-lg px-3 py-2 w-full caret-pink-700 resize-none dark:bg-gray-700 dark:text-white ${inputStyle}`} placeholder={placeholder} rows="5" cols="50"{...props}>

        </textarea>
            {icon ? <span className={`text-pink-700 absolute text-3xl inset-e-4 inset-y-0 inset-bs-3 ${iconStyle}`}>{icon}</span> : <></>}
        </div>
    )
}


export const Otp = ({ OTP, SetOTP }) => {
    const otpStyle = "h-12 lg:w-[calc(100%/5-20px)] md:w-[calc(100%/5-10px)] w-[calc(100%/5-10px)]  rounded-lg shadow-[0_0_0_1px] shadow-gray-500 focus-visible:outline-none focus-visible:shadow-pink-500 text-2xl text-center placeholder-white black caret-pink-700 text-white sm:text-black dark:text-white"

    return (
        <div className="flex w-10/12 justify-around items-center">

            <input type="text" className={otpStyle}
                placeholder="-" maxLength={1} onInput={(e) => {
                    SetOTP({ ...OTP, OTP1: e.target.value })
                }} />
            <input type="text" className={otpStyle} placeholder="-" maxLength={1}
                onInput={(e) => {
                    SetOTP({ ...OTP, OTP2: e.target.value })
                }} />
            <input type="text" className={otpStyle} placeholder="-" maxLength={1}
                onInput={(e) => {
                    SetOTP({ ...OTP, OTP3: e.target.value })
                }} />
            <input type="text" className={otpStyle} placeholder="-" maxLength={1}
                onInput={(e) => {
                    SetOTP({ ...OTP, OTP4: e.target.value })
                }} />
            <input type="text" className={otpStyle} placeholder="-" maxLength={1}
                onInput={(e) => {
                    SetOTP({ ...OTP, OTP5: e.target.value })
                }} />


        </div>
    )
}

