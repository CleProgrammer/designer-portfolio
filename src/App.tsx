import './App.css';

import Sitelogo from './images//header/sitelogo.png'
import Firstsection from './images/firstsection/artes-first-section.png'

import Img1 from './images/secondsection/img1.jpg'
import Img2 from './images/secondsection/img2.jpg'
import Img3 from './images/secondsection/img3.jpg'
import Img4 from './images/secondsection/img4.jpg'
import Img5 from './images/secondsection/img5.jpg'
import Img6 from './images/secondsection/img6.jpg'
import Img7 from './images/secondsection/img7.jpg'
import Img8 from './images/secondsection/img8.jpg'
import Img9 from './images/secondsection/img9.jpg'

import ServicesCheck from './images/secondsection/myservicescheck.png'
import ServicesCheck2 from './images/secondsection/myservicescheck2.png'

import Whatscontact from './images/thirdsection/whatsapp.png'
import Instagramcontact from './images/thirdsection/instagram.png'
import Emailcontact from './images/thirdsection/email.png'

function App() {
  const c = (cl: any) => document.querySelector(cl)

  let imagesBox = [[Img1, '🍔 Essa arte foi desenvolvida pensando em valorizar os principais produtos e diferenciais da lanchonete, como os hambúrgueres artesanais, combos, batatas crocantes e promoções irresistíveis. Utilizei cores quentes e chamativas que despertam o apetite, além de elementos visuais que reforçam o estilo e o branding da marca. Como designer gráfico especializado em social media para lanchonetes, criei um layout estratégico que facilita a leitura, gera engajamento e chama a atenção no feed.'],
                  [Img2, '🍕 Essa arte foi criada com foco em destacar os sabores, promoções e o visual irresistível das pizzas da sua pizzaria. Utilizei cores quentes e apetitosas que remetem ao forno, ao queijo derretido e ao sabor inconfundível da pizza, além de elementos visuais que reforçam a identidade da marca. Como designer gráfico especializado em social media para pizzarias, meu trabalho é transformar seu cardápio em artes impactantes que realmente geram engajamento.'],
                  [Img3, '🍇 Cada detalhe dessa arte foi pensado estrategicamente para conectar a marca com o público certo. As cores fortes e contrastantes remetem ao frescor e ao sabor do açaí, enquanto a tipografia moderna passa profissionalismo e confiança. Como designer gráfico com foco em social media para açaíterias, construo artes que realmente se destacam no feed. Tudo foi criado com o objetivo de atrair olhares, gerar curtidas, comentários e transformar seguidores em clientes.'],
                  [Img4, '🍔 Essa arte foi pensada para destacar o sabor e o visual dos lanches da sua lanchonete. Com uma paleta de cores atrativa, fontes impactantes e foco total no produto, o objetivo é criar uma conexão direta com quem vê a postagem. Como designer gráfico e social media, desenvolvo artes criativas e personalizadas para lanchonetes que desejam se destacar no Instagram, Facebook e outros canais digitais. 💬 Seja para promover um combo, divulgar uma oferta ou simplesmente deixar o feed mais apetitoso. Eu cuido do visual para o seu cardápio brilhar nas redes.'],
                  [Img5, 'Essa arte foi pensada para destacar o clima descontraído, os drinks, petiscos e as promoções da sua cervejaria ou bar. Com um visual vibrante, fontes modernas e elementos que remetem ao universo dos bares como copos, rótulos e luzes. O objetivo é criar uma identidade forte e atrativa para o seu perfil. Como designer gráfico especializado em social media para bares e cervejarias, produzo conteúdos que não só chamam atenção, mas também ajudam a atrair mais clientes para o seu espaço.'],
                  [Img6, 'Essa arte foi criada para valorizar aquele momento especial de sábado: a feijoada! Utilizei uma paleta de cores quentes e elementos visuais que remetem ao sabor, à tradição e ao clima acolhedor dos almoços em família. Como designer gráfico especializado em social media para o ramo alimentício, desenvolvo artes que despertam o apetite e reforçam a identidade da marca. 🎯 Ideal para restaurantes, bares e lanchonetes que querem divulgar seu prato do dia, atrair mais clientes e se destacar nas redes sociais com um visual chamativo, estratégico e profissional.'],
                  [Img7, '🌞 A escolha das cores, imagens e textos foi feita para reforçar o apelo visual do produto e destacar ofertas de forma clara e impactante. Como designer gráfico e social media, meu foco é ajudar negócios como açaíterias a criarem uma presença marcante no digital. 💡 Resultado: uma arte personalizada, estratégica e alinhada com os objetivos comerciais da sua marca de açaí.'],
                  [Img8, '🎨 Essa arte foi criada pensando em destacar os principais atrativos da açaíteria, como a variedade de sabores, a aparência irresistível dos copos e o clima refrescante que a marca transmite. Utilizei cores vibrantes e elementos tropicais para reforçar a identidade visual e atrair a atenção de quem está navegando pelo feed. O layout foi planejado por mim, designer gráfico especializado em social media, para valorizar o produto e facilitar a leitura, com uma comunicação direta e visualmente agradável. 🎯 O objetivo é gerar desejo, engajamento e fortalecer a presença digital da sua açaíteria nas redes sociais.'],
                  [Img9, 'Essa arte foi criada com o objetivo de transmitir a energia e o estilo único do seu bar. Utilizei uma combinação de cores marcantes e tipografias que remetem ao ambiente noturno e animado da sua casa. Como designer gráfico focado em redes sociais para bares e cervejarias, desenvolvo artes personalizadas que valorizam a marca e promovem cardápios e experiências.']]

  const OpenModal = (e:any):void => {
    if( c('.App .portfolio-modal') ) {
      if(c('.App .portfolio-modal').id === 'open') {
        c('.App .portfolio-modal .modal-main .modal-image img').src = imagesBox[e.target.id - 1][0]
        c('.App .portfolio-modal .modal-main .modal-image-desc').innerHTML = imagesBox[e.target.id - 1][1]
        c('.App .portfolio-modal').style.display = 'flex'
        c('.App .portfolio-modal').id = 'close'
      } else if( c('.App .portfolio-modal').id === 'close' ) {
        c('.App .portfolio-modal').style.display = 'none'
        c('.App .portfolio-modal').id = 'open'
      }
    }
  }

  return (
    <div className="App">
      <div className='portfolio-modal' id='open'>
        <div className='close-modal'><div onClick={(e) => OpenModal(e)}>X</div></div>
        <div className='modal-main'>
          <div className='modal-image'><img src="" alt="imagem de arte designer gráfico social media" /></div>
          <p className='modal-image-desc'></p>
        </div>
      </div>
      <header className='header'>
        <div className='logo'>
          <a href=''><img src={Sitelogo} alt='Logo do Clebson Designer Gráfico'/></a>
        </div>
        <nav className='menu'>
          <ul>
            <a href='#home' id='home' rel="noopener noreferrer"><li className='inicio-li'>Início</li></a>
            <a href='#portfolio' rel="noopener noreferrer"><li className='portfolio-li'>Portfólio</li></a>
            <a href='#contacts' rel="noopener noreferrer"><li className='contatos-li'>Contatos</li></a>
            <a href='https://www.instagram.com/clebsondesignergrafico/' target='_blank' rel="noopener noreferrer"><li className='instagram-li'>Instagram</li></a>
          </ul>
        </nav>
      </header>
      <main>
        <section className='first-section'>
          <div className='first-section-main'>
            <div className='first-section-main-1'>
              <h1 className='introduce-me'>Clebson Designer Gráfico</h1>
              <div className='buttons'>
                <button onClick={() => window.open('https://www.instagram.com/clebsondesignergrafico/', '_blank')}>instagram</button>
                <button onClick={() => window.open('https://www.wa.link/pq22g7', '_blank')}>whatsapp</button>
              </div>
            </div>
            <div className='first-section-main-2'>
              <img src={Firstsection} alt="" />
            </div>
          </div>
        </section>
        <section className='second-section'>
          <div className='section-my-services'>
            <h2 className='title'>Meus Serviços</h2>
            <div className='services'>
              <article className='service-1'>
                <div className='service-1-check'><img src={ServicesCheck} alt="" aria-hidden="true" /></div>
                <div className='service-1-desc'>
                  <h2 className='title1'>Artes para redes sociais</h2>
                  <p className='desc'>Sou designer gráfico especializado na criação de artes personalizadas para redes sociais. Desenvolvo conteúdos criativos, profissionais e impactantes para reforçar a identidade visual da marca. Atendo negócios como açaíterias, lanchonetes, pizzarias, bares e outros empreendimentos do ramo alimentício. Produzo artes para posts no feed, stories, reels, cardápios digitais, anúncios e muito mais.</p>
                </div>
              </article>
              <article className='service-2'>
                <div className='service-2-check'><img src={ServicesCheck2} alt="" aria-hidden="true" /></div>
                <div className='service-2-desc'>
                  <h2 className='title2'>Edição de vídeos curtos</h2>
                  <p className='desc'>Sou editor de vídeos com foco na criação de conteúdos curtos e envolventes para redes sociais. Meu trabalho é pensado para valorizar a identidade da marca e aumentar o engajamento. Edito vídeos dinâmicos, profissionais e no estilo certo para Reels, Shorts, anúncios ou stories.</p>
                </div>
              </article>
            </div>
          </div>
          <div className='section-portfolio' id='portfolio'>
            <h2 className='section-portfolio-title'>Portfólio</h2>
            <div className='section-portfolio-examples'>
              {imagesBox.map((item, index) => {
                return(
                  <article className='arte-box' id={`${index + 1}`} data-descricao={item[1]} onClick={(e) => OpenModal(e)}>
                    <div className='arte-img' id={`${index + 1}`} data-descricao={item[1]}>
                      <img src={item[0]} id={`${index + 1}`} data-descricao={item[1]} alt="imagem portfólio designer gráfico" title='ver detalhes' />
                    </div>
                  </article>
                )
              })}
            </div>   
          </div>
        </section>
        <section className='third-section' id='contacts'>
          <div className='third-section-main'>
            <div className='box1'>
              <div className='text1'>Entre em contato e faça um orçamento sem compromisso</div>
              <div className='text2'>Sua marca em destaque nas redes ➚</div>
            </div>
            <div className='box2'>
              <div className='box2-main'>
                <div className='contacts'>
                  <div className='logo'><img src={Whatscontact} alt="" /></div>
                  <a href='https://www.wa.link/pq22g7' target='_blank' rel="noopener noreferrer" className='name'>entre em contato pelo Whatsapp</a>
                </div>
                <div className='contacts'>
                  <div className='logo'><img src={Instagramcontact} alt="" /></div>
                  <a href='https://www.instagram.com/clebsondesignergrafico/' target='_blank' rel="noopener noreferrer" className='name'>entre em contato pelo Instagram</a>
                </div>
                <div className='contacts'>
                  <div className='logo'><img src={Emailcontact} alt="" /></div>
                  <div className='name'>clebsondev@hotmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className='footer-main'>
          <div className='options'>
            <a href='#home' rel="noopener noreferrer">Início</a>
            <a href='#portfolio' rel="noopener noreferrer">Portfólio</a>
            <a href='#contacts' rel="noopener noreferrer">Contatos</a>
            <a href='https://www.instagram.com/clebsondesignergrafico/' target='_blank' rel="noopener noreferrer">Instagram</a>
          </div>
          <div className='copyright'>Website criado por © Clebson Designer Gráfico</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
