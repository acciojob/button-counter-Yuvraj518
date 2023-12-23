import React, { useState } from "react"

const Button=()=>{
    const [count,setCount]=useState(0);
    function increaseFun(){
        setCount(count+1);
    }
    return (<div>
        <h5>Button clicked ${count} times</h5>
        <button onClick={increaseFun}>Click me</button>
    </div>)
}

export default Button;