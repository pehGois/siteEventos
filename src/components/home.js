import '../App.css';

import Carrousel from './carrousel';

export default function Home() {
  return (
      <div className="container">
        <Carrousel/>
        <div className='divider' style={{right:"0"}}></div>
          <h3>Sobre Nós</h3>
        <div className='divider'></div>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et diam nunc. Morbi aliquet et mi nec cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sit amet euismod elit, sit amet hendrerit turpis. Curabitur elementum congue mauris, ut luctus urna imperdiet sit amet. Vestibulum commodo ex enim, at viverra libero dapibus in. Maecenas et aliquet enim. Cras efficitur felis et elit suscipit, nec euismod nisi lacinia. Suspendisse eget felis sollicitudin, bibendum orci in, lobortis lorem. Praesent faucibus eget sapien ac convallis. Quisque sed rutrum leo, in commodo lectus. Aenean viverra lectus ipsum, non pharetra tellus imperdiet sit amet. Morbi consequat eros vitae venenatis convallis. Nam ac arcu eu lectus convallis auctor.</p>
      </div>
  );
}