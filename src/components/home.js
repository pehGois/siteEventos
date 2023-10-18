import '../App.css';
import Carrousel from './carrousel';
import Drinks from "../img/drinks.jpg"
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (

      <div>
        {!(props.menuActive) && 
        <div className="container">
          <Carrousel/>
          <div className='divider' style={{right:"0"}}></div>
            <h3 className='title'>Sobre Nós</h3>
          <div className='divider'></div>
          <p className='text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          
          <div>
          <div className='gridContainer'>
              <div className='gridImage'><img src={Drinks} alt=''/></div>
              <div style={{display:"grid", placeItems:"center"}}>
                <div>
                  <h3>Nossa Missão</h3>
                  <p>Lorem Ipsum Dolor Sit Amet Consquanctum Adisplicing Et Dolor Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                  <Link to="/form"><button className="bold" style={{color:"#ffff", backgroundColor:"var(--background)", padding:"8px",}}>Solicite um orçamento</button></Link>
                </div>

              </div>
              </div>
            </div>

          <div className='aboutContainer flex'>

            <div className='bikesContainer'>
              <div className='bikesImg'><img src={Drinks} alt=''/></div>
              <p>Lorem Ipsum Dolor Sit Amet Consquanctum Adisplicing Et Dolor</p>
            </div>

            <div className='dishesContainer'>
              <img src={Drinks} alt=''/>
            </div>

            <div className='crewContainer flex'>
              <p>Lorem Ipsum Dolor Sit Amet Consquanctum Adisplicing Et Dolor</p>
              <div className='crewImg'>
                <img src={Drinks} alt=''/>
              </div>
            </div>

          </div>
          <footer className="flex" style={{justifyContent:"space-around"}}>
            <h3>Título</h3>
            <div className='flex'>
              <ul>
                <li>Instragram</li>
                <li>Facebook</li>
                <li>Whatsapp</li>
              </ul>
              <ul>
                <li>Email</li>
                <li>Endereço</li>
              </ul>
            </div>
          </footer>

        </div>
        }
      </div>
  );
}