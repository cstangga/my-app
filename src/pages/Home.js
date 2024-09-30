import React from "react";

// 함수형 component

const  func=()=>{
    return <h1>Home 입니다</h1>
}

// class func extends React.Component{
//     render(){
//         return <h1>클래스형 component입니다</h1>
//     }
// }

export default func; // 이렇게 해야 다른 곳에서 이 component를 사용할 수 있다.
// 그리고 요즘에는 함수형 component를 많이 사용한다
// 각 js를 component라고 한다
// 그리고 각 component를 rendering 하는데 routing이라고 한다
// 이 작업을 하려면 npm install react-router-dom 작업하고 있는 폴더에 설치한다