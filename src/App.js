import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';
import Home from "./components/home"
import Form from "./components/form"
import logo from "./img/logo.png"
import {useState} from 'react'

export default function App(){
  const [isActive, setActive] = useState(false)
  return(
    <div className="app">
      <Router>
      <div className="navBar">
          <div className="logoContainer flex">
            <button onClick={()=>{setActive(!isActive)}} className="btnMenu"></button>
            <img src={logo} alt="Logo" className="logo"/>
            <Link to="/form"><button>Solicite um orçamento</button></Link>
          </div>

          <div className={isActive? "block" : "none"}>
            <div className="menuContainer flex">
              <div className="linkContainer flex">
                <Link to="/" onClick={()=>{setActive(false)}}>Home</Link>
                <Link to="/" onClick={()=>{setActive(false)}}>Home</Link>
                <Link to="/" onClick={()=>{setActive(false)}}>Home</Link>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home menuActive={isActive}/>}/>
          <Route path="/form" element={<Form/>}/>     
          <Route path="/*" element={"404"}/>     
        </Routes>
      </Router>

    </div>
  )
}