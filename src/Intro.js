import React from "react";
import Button from "./Button";

function Intro(props) {
    return(
<div className=" p-24 items-center text-xl bg-[url('https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?w=826&t=st=1649701269~exp=1649701869~hmac=6b8ca4fd608a13380560184104a1c1229c4151f9877b9e7528ba14bff7e54686')]">
<p className="text-4xl text-black "> Hi, I'm</p>
<h1 className="text-8xl text-yellow-400 font-semibold animate-pulse hover:animate-bounce "> Navin Rangar.</h1>

<h2 className="text-5xl text-black mt-3 mb-3  ">Front End Web Developer and Digital Marketer.</h2>

<p className="text-2xl text-yellow-600 underline mb-11"> Have been in WebDev space for last 3 months, and have worked with over 10 clients. Also having 5 years of Digital Marketing experience.</p>


<Button className="p-1 pl-2 pr-2 text-2xl transition ease-in-out delay-100 bg-yellow-400 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300"> View Projects 🢡</Button>
</div>
    )
}


export default Intro