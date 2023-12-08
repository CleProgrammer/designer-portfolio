import './App.css';
import $ from 'jquery'

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

import Emailicon from './images/footer/email.png'
import Whatsappicon from './images/footer/whatsapp.png'
import Linkedinicon from './images/footer/linkedin.png'

function App() {
  const c = (cl: any) => document.querySelector(cl)

  let saveImg = [['Img1', Img1], ['Img2', Img2], ['Img3', Img3], ['Img4', Img4], ['Img5', Img5], ['Img6', Img6], ['Img7', Img7], ['Img8', Img8]]


  const borderBottom = (e:any) => {
    console.log( e.target.className )
    c(`.${e.target.className}`).style.borderBottom = '2px solid gray'
    c('.App .header .menu ul').style.marginTop = '18px'
  }

  const withoutBorderBottom = (e:any) => {
    c(`.${e.target.className}`).style.borderBottom = '0px'
    c('.App .header .menu ul').style.marginTop = '16px'
  }

  const goToPageSection = (e:any) => {
    if( e.target.className === 'portfolio-li' ) {
      $(document).ready(function() {
        $('html, body').animate({
          scrollTop: 400
        }, 1000)
      })
    } else if( e.target.className === 'contatos-li' ) {
      $(document).ready(function() {
        $('html, body').animate({
          scrollTop: 3000
        }, 1000)
      })
    }
  }

  const openModal = (e: any) => {
    for( let i in saveImg ) {
      if( e.target.id === saveImg[i][0] ) {
        let newImg = document.createElement('img')
        newImg.src = saveImg[i][1]
        c('.portfolio-modal').appendChild( newImg )
        c('.portfolio-modal').style.display = 'flex'
      }
    }
  }

  const closeModal = () => {
    c('.portfolio-modal').style.display = 'none'
    c('.portfolio-modal img').remove()
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='logo'>
          <a href=''><img src={Sitelogo}/></a>
        </div>
        <div className='menu'>
          <ul>
            <a href=''><li className='inicio-li'onMouseOver={borderBottom} onMouseOut={withoutBorderBottom}>INÍCIO</li></a>
            <li className='portfolio-li' onMouseOver={borderBottom} onMouseOut={withoutBorderBottom} onClick={goToPageSection}>PORTFÓLIO</li>
            <li className='contatos-li' onMouseOver={borderBottom} onMouseOut={withoutBorderBottom} onClick={goToPageSection}>CONTATOS</li>
          </ul>
        </div>
      </div>
      <div className='first-section' style={{backgroundImage: `url(${Firstsection})`}}>
        <div className='first-section-main'>
          <div>
            <div className='introduce-me'>Olá, eu sou Clebson, DESIGNER GRÁFICO</div>
            <div className='about-me'>Nesse site estou expondo minhas criações pessoais, onde utilizo os softwares Illustrator e Corel Draw. Também tenho experiência em vetorização de imagens, para que seja possível a ampliação dessas imagens sem a perda de qualidade e serem estampadas em camisas. </div>
          </div>
          <div className='portfolio-first-section'>
            {saveImg.map((item) => 
                <img key={item[0]} src={item[1]}/>
            )}
          </div>
        </div>
        
      </div>
      <div className='second-section'>
        <div className='title'>
          Portfólio
        </div>
        <div className='portfolio'>
          {saveImg.map((item) => 
            <img key={item[0]} id={item[0]} src={item[1]} onClick={openModal}/>
          )}
        </div>
        <div className='portfolio-modal'>
          <div className='close-modal' onClick={closeModal}>X</div>
        </div>
      </div>
      <footer className='footer' style={{backgroundImage: `url(${Firstsection})`}}>
        <div className='footer-main'>
          <div>
            <img src={Emailicon}/>
            <div>clebsondev@hotmail.com</div>
          </div>

          <div>
            <img src={Whatsappicon}/>
            <div>+55 (75) 99800-9769</div>
          </div>

          <div>
            <img src={Linkedinicon}/>
            <div>linkedin.com/in/clebsonbarbosa</div>
          </div>
        </div>
        <div className='copyright'>© Clebson Barbosa</div>
      </footer>
    </div>
  );
}

export default App;
