import React, { useState } from "react";

const Counter = ()=>{
    const [txtVaulue,setTxtVaulue]=useState("") // 초기값을 0으로 한다

    const onChange = (e)=>{
        setTxtVaulue(e.target.value);
    };

    return (
        <div>
            <h1>입력된 값을 </h1>
            {/* value = {useState 변수} 를 해야지 끝까지 입력이 된다 */}
            <input type="text" value={txtVaulue} onChange={onChange}></input>
            <br></br>
            <p>{txtVaulue}</p>
        </div>
    );
}

export default Counter;