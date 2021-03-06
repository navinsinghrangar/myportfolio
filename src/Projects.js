import React from "react";
import NavLink from './NavLink'

function Header(props){
    return( 
        
        <div className="pt-14 pb-11 bg-gray-200">
<a name="projectssection"> </a>
<h2 className="font-bold text-3xl text-center m-8 underline"> Projects Handled </h2>
        <div className="sm:flex sm:flex-row flex flex-col mx-1.5 sm:mx-48 my-12 space-y-6 sm:space-x-6 ">
        <div className=" px-24 py-16 shadow shadow-[#040c16] hover:scale-110 duration-500">
        <p class="font-bold font-mono text-2xl"><NavLink href="https://www.google.com"> ToDo </NavLink></p>
        </div>

        <div className=" px-20 py-14 shadow shadow-[#040c16] hover:scale-110 duration-500">
        <p class="font-bold font-mono text-2xl"><NavLink href="https://www.google.com"> CodeYogi </NavLink></p>
        </div>



        <div className=" px-20 py-14 shadow shadow-[#040c16] hover:scale-110 duration-500">
        <p class="font-bold font-mono text-2xl"> <NavLink href="https://www.google.com"> Portfolio </NavLink></p>
        </div>

        </div>
        </div>
    )
}

export default Header