import Home from "./pages/Home";
import About from "./pages/About";
import React from "react";
import {Route, Routes,Link} from 'react-router-dom'
import Counter from "./pages/Counter";
import Input from './pages/Input'

function App() {
  return (
    <div className="App">
      <nav>
        {/* a태그랑 같은 기능이다
        여기서 to="/" 이렇게 되어 있는데 id같은 개념이다 이거랑 같은 Route의 path랑 같은 곳을 간다
        즉 Link to의 값과 = Route path의 값이 같아야 한다*/}

        <Link to="">Home</Link> |
        <Link to="about">About</Link>| 
        <Link to="calcu">Calcu</Link>| 
        <Link to="input">Input</Link> 
      </nav>
      {/* ul>li가 있듯이, Routes>Route가 있는거다*/}
      <Routes>
        <Route path="" element={<Home></Home> }/>
        <Route path="about" element={<About></About> }/>
        <Route path="calcu" element={<Counter></Counter> }/>
        <Route path="input" element={<Input></Input> }/>
      </Routes>

    </div>
  );
}

export default App;
