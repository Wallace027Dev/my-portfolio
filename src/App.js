import "./styles/App.css";
import linkedinWhite from "./images/linkedin.svg";
import githubWhite from "./images/github-white.svg";
import Nav from "./components/Nav";
import MainInfo from "./components/MainInfo";
import MyExp from "./components/MyExp";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import MyContacts from "./components/MyContacts";

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
        <MyContacts />
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
