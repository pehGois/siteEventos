import '../App.css';
import { Link } from 'react-router-dom';
import Carrousel from './carrousel';

/*Imported Images*/
import crewI from "../img/crew.jpg"
import crewII from "../img/crewII.jpg.png"
import bikeI from "../img/bikeI.jpg"
import bikeII from "../img/bikeII.jpg"
import bikeIII from "../img/bikeIII.jpg"
import food from "../img/food.png"
import teste from "../img/drinks.jpg"

export default function Home(props) {
  const mainImages = [
    {url: bikeI,caption: "Imagem 1",},
    {url: bikeII,caption: "Imagem 2"},
    {url: bikeIII,caption: "Imagem 3",}
  ]
  const aboutImages =[
    {url: food, caption: "Imagem 1"},
    {url: crewII, caption: "Imagem 3"}
  ]

  return (
      <main>
        {!(props.menuActive) && 
        <div>
          <article className='mainContainer grid'>
            <Carrousel images = {mainImages}/>

            <div style={{width:"", margin:"auto"}}>
              <div className='relative flex flex-align'>
                <div className='divider right absolute top'></div>
                  <h3>Sobre Nós</h3>
                <div className='divider absolute left bottom'></div>
              </div>
              <p> Descubra o toque vintage e luxuoso da S.Teles! Nossas festas são únicas, com garçons e atendentes atenciosos, além de uma variedade de bebidas e petiscos para todos os gostos. Não perca a chance de admirar nossas bicicletas customizadas, que não só decoram, mas também servem como charmosos balcões. Faça da sua festa uma experiência memorável com S.Teles!
              </p>
            </div>
          </article>

            <article className='grid side-image-grid border radius'>
              <div className='hidden'><img src={teste} alt=''/></div>
              <aside className='flex flex-align'>
                <h3>Nossa Missão</h3>

                <p className='side-image-text'>É proporcionar experiências únicas e memoráveis em eventos, combinando o charme vintage e o luxo em nossos serviços de festas, oferecendo atendimento de qualidade e a originalidade de nossas bicletas personalizadas</p>
                <Link to="/form">
                  <button className="bold">Solicite um orçamento</button>
                </Link>
              </aside>
            </article>

          <article className='topics'>

            <div className='grid top-card-grid border radius none'>
              <div className='hidden radius'><img src={teste} alt=''/></div>
              <div className='flex flex-align'>
                <h3>Nosso Serviço</h3>
                <p className='side-image-text'>Na S.Teles, primamos pela alta qualidade em nossos serviços. Oferecemos uma seleção de bifes e bebidas que são verdadeiras delícias para todos os gostos. Nossos pratos são preparados com cuidado e nossas bebidas são escolhidas com esmero para garantir uma experiência gastronômica excepcional em nossas festas.</p>
              </div>
            </div>

            <div className='radius none hidden'>
              
              <div className='hidden radius carousel-about-img flex flex-align'>
                <Carrousel images = {mainImages}/>
              </div>
            </div>

            <div className='grid bottom-card-grid border radius '>
              <div className='flex flex-align'>
                <h3>Nossa Equipe</h3>
                <p className='side-image-text'>A equipe da S.Teles é apaixonada e altamente qualificada, oferecendo atendimento impecável em eventos. Nossos artesãos criam bicicletas customizadas à mão, adicionando originalidade e sofisticação às festas que organizamos, tornando-as únicas e inesquecíveis.</p>
              </div>
              <div className='hidden radius'><img src={teste} alt=''/></div>
            </div>

          </article>

          <Link to="/form">
            <button className='big-button bold'>Solicite um orçamento</button>
          </Link>

          <footer className='flex flex-align absolute left'>
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
      </main>
  );
}