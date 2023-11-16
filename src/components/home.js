import '../App.css';
import { Link } from 'react-router-dom';
import Carrousel from './carrousel';
import teste from '../img/drinks.jpg'
import {getGallery, getContent} from '../client'
import { useQuery } from '@tanstack/react-query';

export default function Home(props) {
  const contentQuery = useQuery({ queryKey: ['content'], queryFn: getContent})
  const galleryQuery = useQuery({queryKey: ['gallery'], queryFn: getGallery})
    
  function formatGalleryObj(index){
    if (galleryQuery.status === 'success') {
      var images = []
      console.log(galleryQuery.data[index])
      for (let i in galleryQuery.data[index]?.imgCarousel) {
        var obj = {}
        obj.url = galleryQuery.data[index]?.imgCarousel[i]?.image?.asset?.url
        images.push(obj)    
      }
      console.log(images)
      return images
    }
    else {
      console.log('Nenhuma galeria encontrada.', galleryQuery.status);
    }
  }

  function showTextContent(index) {
      if (contentQuery.status === 'success') {
        return contentQuery.data[index]?.body?.children?.text
      }
      else {
        console.log('Nenhum resultado encontrado.');
      }
  }

  function showImgContent(index) {
    if (contentQuery.status === 'success') {
      return contentQuery.data[index]?.image?.image?.asset?.url
    }
    else {
      console.log('Nenhuma imagem encontrada.');
    }
  }
  {formatGalleryObj(0)}
  return (
      <main>
        {!(props.menuActive) && 
        <div>
          <Carrousel images={formatGalleryObj(0)}/>
          <article className='mainContainer grid'>
            <div style={{width:"", margin:"auto"}}>
              <div className='relative flex flex-align'>
                <div className='divider right absolute top'></div>
                  <h3>Sobre Nós</h3>
                <div className='divider absolute left bottom'></div>
              </div>
              <p> {showTextContent(1)}
              </p>
            </div>
          </article>

            <article className='grid side-image-grid border radius'>
              <div className='hidden'><img src={showImgContent(3)} alt=''/></div>
              <aside className='flex flex-align'>
                <h3>Nossa Missão</h3>

                <p className='side-image-text'>{showTextContent(3)}</p>
                <Link to="/form">
                  <button className="bold side-image-button">Solicite um orçamento</button>
                </Link>
              </aside>
            </article>

          <article className='topics'>

            <div className='grid top-card-grid border radius none'>
              <div className='hidden radius'><img src={showImgContent(2)} alt=''/></div>
              <div className='flex flex-align'>
                <h3>Nosso Serviço</h3>
                <p className='side-image-text'>{showTextContent(2)}</p>
              </div>
            </div>

            <div className='radius none hidden'>

              <div className='hidden radius carousel-about-img flex flex-align'>
              <Carrousel images={formatGalleryObj(0)}/>
              </div>
            </div>

            <div className='grid bottom-card-grid border radius '>
              <div className='flex flex-align'>
                <h3>Nossa Equipe</h3>
                <p className='side-image-text'>{showTextContent(0)}</p>
              </div>
              <div className='hidden radius'><img src={showImgContent(0)} alt=''/></div>
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