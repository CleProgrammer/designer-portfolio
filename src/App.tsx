import './App.css';
import { useEffect, useRef } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'


/*IMAGEM BOTÃO WHATSAPP*/
import WhatsappIcon from './images/whatsappbutton/WhatsApp.svg.png'

/*IMAGENS PORTFÓLIO*/
import Img1 from './images/secondsection/img1.jpg'
import Img2 from './images/secondsection/img2.jpg'
import Img3 from './images/secondsection/img3.jpg'
import Img4 from './images/secondsection/img4.png'
import Img5 from './images/secondsection/img5.jpg'
import Img6 from './images/secondsection/img6.jpg'
import Img7 from './images/secondsection/img7.png'
import Img8 from './images/secondsection/img8.png'
import Img9 from './images/secondsection/img9.png'
import Img10 from './images/secondsection/img10.jpg'
import Img11 from './images/secondsection/img11.jpg'
import Img12 from './images/secondsection/img12.jpg'

/*IMAGENS THIRD SECTION*/
import Service1 from './images/thirdsection/service1.png'

/*IMAGENS FOURTH SECTION*/
import WhatsAppContact from './images/fourthsection/icon-whatsapp.png'
import InstagramContact from './images/fourthsection/icon-instagram.png'
import EmailContact from './images/fourthsection/icon-email.png'


function App() {
  const c = (cl: any) => document.querySelector(cl)

  let imagesBox = [[Img1, 'Img1'], [Img2, 'Img2'], [Img3, 'Img3'], [Img4, 'Img4'], [Img5, 'Img5'],
                  [Img6, 'Img6'], [Img7, 'Img7'], [Img8, 'Img8'], [Img9, 'Img9'], [Img10, 'Img10'],
                  [Img11, 'Img11'], [Img12, 'Img12']]

  /*const openInstagram = () => {
    const app = "instagram://user?username=clebsondesignergrafico";
    const web = "https://www.instagram.com/clebsondesignergrafico/";

    window.location.href = app;

    setTimeout(() => {
      window.location.href = web;
    }, 400);
  };*/


  const openInstagram = (e:any) => {
    e.preventDefault(); // impede o href de abrir nova aba

    const username = "clebsondesignergrafico";
    const appUrl = `instagram://user?username=${username}`;
    const webUrl = `https://www.instagram.com/${username}/`;

    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isAndroid) {
      // Android: usa intent para abrir o app
      const intentUrl = `intent://instagram.com/_u/${username}/#Intent;package=com.instagram.android;scheme=https;end`;
      window.location.href = intentUrl;
    } else if (isIOS) {
      // iOS: tenta abrir o app e fallback para web se não abrir
      let appOpened = false;

      const onVisibilityChange = () => {
        if (document.hidden) appOpened = true;
      };
      document.addEventListener("visibilitychange", onVisibilityChange);

      window.location.href = appUrl;

      setTimeout(() => {
        if (!appOpened) window.location.href = webUrl;
        document.removeEventListener("visibilitychange", onVisibilityChange);
      }, 1200);
    } else {
      // Desktop: abre em nova aba
      window.open(webUrl, "_blank");
    }
  };


  /*const openWhatsApp = () => {
  const phone = "5575998009769"; // Seu número com código do país
  const appUrl = `whatsapp://send?phone=${phone}`; // App do WhatsApp
  const webUrl = `https://wa.me/${phone}`;         // WhatsApp Web

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    let appOpened = false;

    const onVisibilityChange = () => {
      if (document.hidden) appOpened = true;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    window.location.href = appUrl;

    setTimeout(() => {
      if (!appOpened) window.location.href = webUrl;
      document.removeEventListener("visibilitychange", onVisibilityChange);
    }, 1200);

  } else {
    window.open(webUrl, "_blank");
  }
};*/

  const openWhatsApp = (e:any) => {
    e.preventDefault(); // impede o href de abrir nova aba

    const phone = "5575998009769";
    const appUrl = `whatsapp://send?phone=${phone}`;
    const webUrl = `https://wa.me/${phone}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Tenta abrir o app
      window.location.href = appUrl;

      // Caso o app não esteja instalado, o usuário pode clicar manualmente no link:
      // webUrl
    } else {
      // Desktop: abre WhatsApp Web
      window.open(webUrl, "_blank");
    }
  };

  /*const OpenModal = (e:any):void => {
    if( c('.App .portfolio-modal') ) {
      if(c('.App .portfolio-modal').id === 'open') {
        
        imagesBox.map((item) => {
          if(e.target.id === item[1]) {
            c('.App .portfolio-modal .modal-main img').src = item[0]
            c('.App .portfolio-modal').style.display = 'flex'
            c('.App .portfolio-modal').id = 'close'
          }
        }) 

      } else if( c('.App .portfolio-modal').id === 'close' ) {
        c('.App .portfolio-modal').style.display = 'none'
        c('.App .portfolio-modal').id = 'open'
      }
    }
  }*/

  const modalInHistory = useRef(false);
  const closingByX = useRef(false);

  const initialHistoryState = useRef<History['state']>(window.history.state);
  const OpenModal = (e: any): void => {
    const modal = c('.App .portfolio-modal');
    if (!modal) return;

    imagesBox.forEach((item) => {
      if (e.target.id === item[1]) {
        c('.App .portfolio-modal .modal-main img').src = item[0];

        if (modal.id === 'open') {
          modal.style.display = 'flex';
          modal.id = 'close';

          if (!modalInHistory.current) {
            window.history.pushState({ modal: true }, '');
            modalInHistory.current = true;
          }
        }
      }
    });
  };


  const closeModal = () => {
    const modal = document.querySelector('.portfolio-modal') as HTMLElement;
    if (!modal) return;

    if (modalInHistory.current) {
      closingByX.current = true;
      window.history.back(); // 🔥 remove o estado
    }

    modal.style.display = 'none';
    modal.id = 'open';
    modalInHistory.current = false;
  }



  useEffect(() => {
    AOS.init({})

    const handlePopState = () => {
      const modal = document.querySelector('.portfolio-modal') as HTMLElement;

      if (modal && modal.id === 'close') {
        modal.style.display = 'none';
        modal.id = 'open';
        modalInHistory.current = false;
      }

      // impede loop quando veio do X
      closingByX.current = false;
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [])

  return (
    <div className="App">
      <div className='portfolio-modal' id='open'>
        <div className='close-modal'><div onClick={closeModal}>X</div></div>
        <div className='modal-main'>
          <img src="" alt="imagem de arte para mídias sociais criadas por Clebson designer gráfico social media" />
        </div>
      </div>

      <a className='whatsapp-button' href='https://wa.me/5575998009769' onClick={openWhatsApp} rel="noopener noreferrer" aria-label="Contato pelo WhatsApp">
        <img src={WhatsappIcon} alt="WhatsApp" />
      </a>
    

      <header className='header' id='home'>
        <div className='header-main'>
          <div className='logo'>
            <a href=''>Clebson Designer</a>
          </div>
          <nav className='menu'>
            <ul>
              <a href='#serviços' id='services' rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("serviços")?.scrollIntoView({ behavior: "smooth" });
                }}
              ><li className='serviços-li'>SERVIÇOS</li></a>
              <a href='#portfolio' rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
                }}
              ><li className='portfolio-li'>PORTFÓLIO</li></a>
              <a href='https://www.instagram.com/clebsondesignergrafico/' onClick={openInstagram} rel="noopener noreferrer"><li className='instagram-li'>INSTAGRAM</li></a>
              <a href='#contatos' rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contatos")?.scrollIntoView({ behavior: "smooth" });
                }}
              ><li className='contatos-li'>CONTATO</li></a>
            </ul>
          </nav>
        </div>
      </header>
      <main>

        <section className='first-section'>
          <div className='first-section-main' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='introduce-me'><span>Clebson</span>designer gráfico</h1>
          </div>
        </section>
        <section className='second-section' id='portfolio'>
          <div className='portfolio' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <article className='desc-arts'>
              <h2 className='title'>açaí</h2>
              <p className='art-desc'>Artes criadas para açaíterias, com foco em cores vibrantes, clima tropical e comunicação visual que desperta o apetite. Desenvolvidas para destacar a marca e gerar engajamento nas redes sociais do segmento de açaí.</p>
            </article>
            <div className='arts-examples'>
              <div className='arts-examples-main'>
                <img id='Img1' src={Img1} alt="Arte de açaí criada por Clebson Designer Gráfico Freelancer e social media com visual atrativo" onClick={(e) => OpenModal(e)} />
                <img id='Img2' src={Img2} alt="Post criativo criado por Clebson Designer Gráfico Freelancer para social media para açaíteria com elementos tropicais e identidade visual vibrante" onClick={(e) => OpenModal(e)}/>
                <img id='Img3' src={Img3} alt="Design criado por Clebson Designer Gráfico Freelancer para social media para açaíteria com foco em engajamento e apelo visual" onClick={(e) => OpenModal(e)}/>
              </div>
            </div>
          </div>
          <div className='portfolio' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <article className='desc-arts'>
              <h2 className='title pizza'>pizza
              </h2>
              <p className='art-desc'>Como designer gráfico criei artes pensadas para pizzarias, com principal foco em cores quentes e comunicação visual que destaca a pizza. Desenvolvidas para destacar a marca e gerar engajamento nas redes sociais do segmento de pizzaria.</p>
            </article>
            <div className='arts-examples'>
              <div className='arts-examples-main'>
                <img id='Img4' src={Img4} alt="Arte para pizzaria criada por Clebson Designer Gráfico Freelancer para social media com destaque para sabores e visual apetitoso da pizza" onClick={(e) => OpenModal(e)}/>
                <img id='Img5' src={Img5} alt="Post para pizzaria criado por Clebson Designer Gráfico Freelancer para social media com cores quentes e identidade visual da marca" onClick={(e) => OpenModal(e)}/>
                <img id='Img6' src={Img6} alt="Design criado por Clebson Designer Gráfico Freelancer para social media para pizzaria promovendo cardápio e promoções nas redes sociais" onClick={(e) => OpenModal(e)}/>
              </div>
            </div>
          </div>
          <div className='portfolio' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <article className='desc-arts'>
              <h2 className='title lanche'>evento</h2>
              <p className='art-desc'>Artes para eventos, elaboradas por Clebson designer gráfico com foco em cores atrativas para chamar atenção. Artes para redes sociais pensadas para destacar e gerar engajamento no nicho de festas, shows e eventos para estabelecimentos.</p>
            </article>
            <div className='arts-examples'>
              <div className='arts-examples-main'>
                <img id='Img7' src={Img7} alt="Imagem mostra um flyer de um show ou evento sertanejo com Gusttavo Lima, Leonardo e Gustavo Mioto criada por Clebson designer gráfico freelancer e social media" onClick={(e) => OpenModal(e)}/>
                <img id='Img8' src={Img8} alt="Imagem mostra uma arte esportiva de Neymar Jr. criada por Clebson designer gráfico freelancer e social media" onClick={(e) => OpenModal(e)}/>
                <img id='Img9' src={Img9} alt="Imagem mostra uma arte para um show de Gusttavo Lima criada por Clebson designer gráfico freelancer e social media" onClick={(e) => OpenModal(e)}/>
              </div>
            </div>
          </div>
          <div className='portfolio' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <article className='desc-arts'>
              <h2 className='title bar'>bares</h2>
              <p className='art-desc'>Artes criadas por Clebson designer gráfico com foco em cores marcantes e muitos elementos visuais que remetem ao universo do bar. Criações para redes sociais, ideais para divulgar drinks, promoções e gerar engajamento com o segmento de bares e cervejarias.</p>
            </article>
            <div className='arts-examples'>
              <div className='arts-examples-main'>
                <img id='Img10' src={Img10} alt="Arte para bar com drinks e clima descontraído" onClick={(e) => OpenModal(e)}/>
                <img id='Img11' src={Img11} alt="Post para redes sociais de bar com promoções e identidade visual vibrante" onClick={(e) => OpenModal(e)}/>
                <img id='Img12' src={Img12} alt="Design para bar ou cervejaria com foco em engajamento no Instagram" onClick={(e) => OpenModal(e)}/>
              </div>
            </div>
          </div>
        </section>

        <section className='third-section' id='serviços'>
          <h2 className='services' data-aos="fade-up" data-aos-duration="1000">meus serviços</h2>
          <div className='services-main' data-aos="fade-up" data-aos-duration="1000">
            <div className='service-box'>
              <img className='service-image' src={Service1} alt="" />
              <div className='service-information'>
                <h3 className='service-title'>arte social media</h3>
                <p className='service-desc'>Como designer gráfico, crio artes para redes sociais (social media) que comunicam de forma estratégica e reforçam a identidade visual da marca. Cada layout é pensado fortalecer o posicionamento do seu negócio.</p>
              </div>
            </div>
            <div className='service-box'>
              <img className='service-image' src={Service1} alt="" />
              <div className='service-information'>
                <h3 className='service-title'>arte para evento</h3>
                <p className='service-desc'>Crio artes únicas e chamativas para divulgar shows, festas e promoções, garantindo impacto visual marcante nas redes sociais e ajudando seu evento a alcançar mais público.</p>
              </div>
            </div>
            <div className='service-box'>
              <img className='service-image' src={Service1} alt="" />
              <div className='service-information'>
                <h3 className='service-title'>artes esportivas</h3>
                <p className='service-desc'>Crio artes dinâmicas e impactantes para eventos e times esportivos, ajudando a destacar marcas, divulgar jogos e engajar torcedores nas redes sociais.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='fourth-section' id='contatos'>
          <div className='contacts'>
            <div className='contacts-text' data-aos="fade-up" data-aos-duration="1000">
              <h2 className='contact-title'>entre em contato e faça um orçamento sem compromisso</h2>
              <p className='contact-subtitle'>conte comigo para transformar sua ideia em um projeto visual forte e profissional</p>
            </div>
            <div className='contact-box-main' data-aos="fade-up" data-aos-duration="1000">
              <a className='contact-box' href='https://wa.me/5575998009769' onClick={openWhatsApp} rel="noopener noreferrer">
                <div className='contact-image'><img src={WhatsAppContact} alt="" /></div>
                <div className='contact-name'>whatsapp</div>
              </a>
              <a className='contact-box' href='https://www.instagram.com/clebsondesignergrafico/' onClick={openInstagram} rel="noopener noreferrer">
                <div className='contact-image'><img src={InstagramContact} alt="" /></div>
                <div className='contact-name'>instagram</div>
              </a>
              <a className='contact-box' href='mailto:clebsondesigner0@gmail.com?subject=Orçamento&body=Olá Clebson, gostaria de um orçamento...' target='_blank'>
                <div className='contact-image'><img src={EmailContact} alt="" /></div>
                <div className='contact-name'>via email</div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className='footer-main'>
          <div className='footer-menu'>
            <div className='footer-menu-title'>mapa</div>
            <div className='footer-menu-options'>
              <a href='#home'
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                }}
              >início</a>
              <a href='#portfolio'
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
                }}
              >portfólio</a>
              <a href='#serviços'
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("serviços")?.scrollIntoView({ behavior: "smooth" });
                }}
              >serviços</a>
            </div>
          </div>
          <div className='footer-menu'>
            <div className='footer-menu-title'>contato</div>
            <div className='footer-menu-options'>
              <a href='https://wa.me/5575998009769' onClick={openWhatsApp} rel="noopener noreferrer" style={{cursor: "pointer"}}>whatsapp</a>
              <a href='https://www.instagram.com/clebsondesignergrafico/' onClick={openInstagram} rel="noopener noreferrer" style={{cursor: "pointer"}}>instagram</a>
              <a href='mailto:clebsondesigner0@gmail.com?subject=Orçamento&body=Olá Clebson, gostaria de um orçamento...' target='_blank'>via email</a>
            </div>
          </div>
          <div className='footer-rights'>website criado por Clebson Designer</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
