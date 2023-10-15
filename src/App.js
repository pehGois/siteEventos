import './App.css';
import logo from "./img/logo.png"
import {useState} from 'react'
import Carrousel from './components/carrousel';

export default function App() {
  const [isActive, setActive] = useState(false)
  return (
    <div className="app">
      <div className="navBar">
        <div className="logoContainer flex">
          <button onClick={()=>{setActive(!isActive)}} className="btnMenu"></button>
          <img src={logo} alt="Logo"className="logo"/>
          <button>Solicite um orçamento</button>
        </div>

        <div className={isActive? "block" : "none"}>
          <div className="menuContainer flex">
            <p className="bold">Nome do Lugar</p>
            <div className="linkContainer flex">
              <a href="#">Home</a>
              <a href="#">Sobre Nós</a>
              <a href="#">Bares</a>
              <a href="#">Equipes</a>
              <a href="#">Drinks</a>
              <a href="#">Contato</a>
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <Carrousel/>
        <div className='divider' style={{right:"0"}}></div>
          <h3>Sobre Nós</h3>
        <div className='divider'></div>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

        
      </div>
    </div>
  );
}


