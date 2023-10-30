import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';
import Home from "./components/home"
import Form from "./components/form"
import {useState} from 'react'

export default function App(){
  const [isActive, setActive] = useState(false)
  return(
    <div className="app relative">
      <div style={{maxWidth:"1500px", margin:"auto"}}>
        <Router>
        <header className="navBar">
            <nav className={isActive? "block" : "none"}>
                <div className="linkContainer flex">
                  <Link to="/" onClick={()=>{setActive(false)}}>Home</Link>
                  <Link to="https://www.instagram.com/stelles.festaseeventos/" onClick={()=>{setActive(false)}}target="_blank">Instagram</Link>
                  <Link to="/https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5511972787345&e=AT0SR2OXqqi8sbo6sI73Y7UxPx2Vk05QrivZV7DnS-3cTJoH6itTOqs7UfVdqshea1Nr4D7No5xpF-n8Gdsk6DjQoSxn4Dxzt5IIvWA" onClick={()=>{setActive(false)}}target="_blank">Whatsapp</Link>
                </div>
            </nav>
            <div className="logoContainer flex">
              <button onClick={()=>{setActive(!isActive)}} className="btnMenu"></button>
              <Link to="/form"><button>Solicite um orçamento</button></Link>
            </div>
        </header>
        
          <Routes>
            <Route path="/" element={<Home menuActive={isActive}/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/*" element={"404"}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}