import '../App.css';
import Carrousel from './carrousel';
import drinks from "../img/drinks.jpg"
import { Link } from 'react-router-dom';

export default function Home(props) {
  const images = [
    {
    url: drinks,
    caption: "Imagem 1",
    active: true
  },
  {
      url: drinks,
      caption: "Imagem 2",
      active: false
  },
  {
      url: drinks,
      caption: "Imagem 3",
      active: false
  },
  {
      url: drinks,
      caption: "Imagem 4",
      active: false
  }]
  
  return (
      <div>
        {!(props.menuActive) && 
        <div className="container">
          <Carrousel images = {images}/>

          <div className='divider' style={{right:"0"}}></div>
            <h3 className='title'>Sobre Nós</h3>
          <div className='divider'></div>
          <p className='text'> Descubra o toque vintage e luxuoso da S.Teles! Nossas festas são únicas, com garçons e atendentes atenciosos, além de uma variedade de bebidas e petiscos para todos os gostos. Não perca a chance de admirar nossas bicicletas customizadas, que não só decoram, mas também servem como charmosos balcões. Faça da sua festa uma experiência memorável com S.Teles!
          </p>
          
          <div>
          <div className='gridContainer'>
              <div className='gridImage'><img src={drinks} alt=''/></div>
              <div style={{display:"grid", placeItems:"center"}}>
                <div>
                  <h3>Nossa Missão</h3>
                  <p style={{textAlign:"justify",padding: "8px",lineHeight:"24px"}}>É proporcionar experiências únicas e memoráveis em eventos, combinando o charme vintage e o luxo em nossos serviços de festas, oferecendo atendimento de qualidade e a originalidade de nossas bicletas personalizadas</p>
                  <Link to="/form"><button className="bold" style={{color:"#ffff", backgroundColor:"var(--background)", padding:"8px",}}>Solicite um orçamento</button></Link>
                </div>

              </div>
              </div>
            </div>

          <div className='aboutContainer flex'>

            <div className='bikesContainer none'>
              <div className='bikesImg'><img src={drinks} alt=''/></div>
              
              <p>Na S.Teles, primamos pela alta qualidade em nossos serviços. Oferecemos uma seleção de bifes e bebidas que são verdadeiras delícias para todos os gostos. Nossos pratos são preparados com cuidado e nossas bebidas são escolhidas com esmero para garantir uma experiência gastronômica excepcional em nossas festas.</p>
            </div>

            <div className='dishesContainer none'>
              <img src={drinks} alt=''/>
            </div>

            <div className='crewContainer flex'>
              <div style={{marginTop: "24px"}}>
                <h3 style={{margin: "auto"}}>Nosso Time</h3>
                <p style={{textAlign:"justify",padding: "8px",lineHeight:"24px"}}>A equipe da S.Teles é apaixonada e altamente qualificada, oferecendo atendimento impecável em eventos. Nossos artesãos criam bicicletas customizadas à mão, adicionando originalidade e sofisticação às festas que organizamos, tornando-as únicas e inesquecíveis.</p>
              </div>
              <div className='crewImg'>
                <img src={drinks} alt=''/>
              </div>
            </div>

          </div>
          <footer className="flex" style={{justifyContent:"space-around"}}>
            <h3>Fale Conosco</h3>
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