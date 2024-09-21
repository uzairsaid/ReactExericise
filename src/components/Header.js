import React from "react";
import { useState } from "react";

function Header(){
    const text = "Welcome to my web site";
    const [count, setCount] = useState(0);

    const handleClick = ()=>{  
        setCount(count+1);
    }

    return (
       <div>
        <h1>{text}</h1>
        <h1>You clicked {count} times</h1>


        <button onClick={handleClick}> click me </button>
       </div>
    );
}



export default Header