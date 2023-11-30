import './App.css';
import Sitelogo from './images//header/sitelogo.png'
import Firstsection from './images/firstsection/firstsection.png'

import Img1 from './images/secondsection/img1.png'
import Img2 from './images/secondsection/img2.png'
import Img3 from './images/secondsection/img3.png'
import Img4 from './images/secondsection/img4.png'
import Img5 from './images/secondsection/img5.png'
import Img6 from './images/secondsection/img6.png'
import Img7 from './images/secondsection/img7.png'
import Img8 from './images/secondsection/img8.png'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='logo'>
          <img src={Sitelogo}/>
        </div>
        <div className='menu'>
          <ul>
            <li>INÍCIO</li>
            <li>PORTFÓLIO</li>
            <li>CONTATOS</li>
          </ul>
        </div>
      </div>
      <div className='first-section' style={{backgroundImage: `url(${Firstsection})`}}>
        <div className='introduce-me'>Olá, eu sou Clebson, DESIGNER GRÁFICO</div>
        <div className='about-me'>Nesse site estou expondo minhas criações pessoais, onde utilizo os softwares Illustrator e Corel Draw. Também tenho experiência em vetorização de imagens, para que seja possível a ampliação dessas imagens sem a perda de qualidade e serem estampadas em camisas. </div>
      </div>
      <div className='second-section'>
        <div className='title'>
          Portfólio
        </div>
        <div className='portfolio'>
          <img src={Img1}/>
          <img src={Img2}/>
          <img src={Img3}/>
          <img src={Img4}/>
          <img src={Img5}/>
          <img src={Img6}/>
          <img src={Img7}/>
          <img src={Img8}/>
        </div>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
