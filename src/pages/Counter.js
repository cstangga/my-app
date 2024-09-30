import React, { useState } from "react";

const Counter = ()=>{
    const [num,setNum]=useState(0) // 

    const increaseNum =() =>{
        setNum(num+1)
    }

    const decreaseNum =() =>{
        setNum(num+1)
    }



    return (
        <div>
            <h1>여기는 +1,-1페이지 입니다</h1>
            <button onClick={increaseNum}>+1</button>
            <button onClick={decreaseNum}>-1</button>
            <p>
                {num}
            </p>
        </div>
    );
}

export default Counter;