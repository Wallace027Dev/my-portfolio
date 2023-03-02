import "./styles/App.css";
import whatsapp from "./images/Whatsapp.svg";
import copy from "./images/copy.svg";
import email from "./images/email.svg";
import arrowUp from "./images/ArrowUp.svg";
import linkedinWhite from "./images/linkedin.svg";
import githubWhite from "./images/github-white.svg";
import Nav from "./components/Nav";
import MainInfo from "./components/MainInfo";
import MyExp from "./components/MyExp";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";

//FUNCÃO DE COPIAR EMAIL

export default function App() {
  return (
    <>
      <Nav />
      <main className="center col">
        {/* MINHAS INFORMAÇÕES PRINCIPAIS */}
        <MainInfo />
        <div className="line"></div>
        {/* MINHAS EXPERIÊNCIAS */}
        <MyExp />
        <div className="line"></div>
        {/* SOBRE MIM */}
        <AboutMe />
        {/* MEUS PROJETOS */}
        <MyProjects />
        <div className="line"></div>
        {/* MINHAS TECNOLOGIAS */}
        <MySkills />
        <div className="line"></div>
        {/* CONTATOS */}
        <section id="my-contacts" className="my-contacts center">
          <h3 className="section-bar center">📬 Contatos</h3>
          <h2>Vamos conversar!</h2>
          <div className="link-contacts center">
            <img className="transit" src={whatsapp} alt="Meu whatsapp" />
            <div>
              <img className="email-image" src={email} alt="Meu email" />
              <p>wallaceofc@hotmail.com</p>
              <img
                className="copy-image transit"
                src={copy}
                alt="Ícone de copiar"
              />
            </div>
          </div>
          <a href="#">
            Voltar ao topo <img src={arrowUp} alt="Seta para cima" />{" "}
          </a>
        </section>
        {/* RODAPÉ */}
        <footer className="center">
          <div className="foot">
            <p>
              Feito por{" "}
              <a href="https://www.linkedin.com/in/wallace-dev/">
                Wallace Vieira
              </a>{" "}
            </p>
          </div>
          <div className="social-medias-foot">
            <a href="https://www.linkedin.com/in/wallace-dev/">
              <img
                className="transit"
                src={linkedinWhite}
                alt="Social Medias"
              />
            </a>
            <a href="https://github.com/Wallace027Dev">
              <img className="transit" src={githubWhite} alt="Social Medias" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
