import React, { useState } from "react"

const Button=()=>{
    const [count,setCount]=useState(0);
    function increaseFun(){
        setCount(count+1);
    }
    return (<div>
        <p>Button clicked {count} times</p>
        <button onClick={increaseFun}>Click me</button>
    </div>)
}

export default Button;