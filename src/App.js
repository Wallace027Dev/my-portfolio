import "./styles/App.css";
import fotoPerfil from "./images/logo-perfil.svg";
import logoWallace from "./images/logo-wallace.svg";
import socialMedias from "./images/SocialMedias.svg";
import whatsapp from "./images/Whatsapp.svg";
import cvDown from "./images/CVDownload.svg";
import designIcon from "./images/DesignIcon.svg";
import projectIcons from "./images/ProjectsIcon.svg";
import codeIcon from "./images/CodeIcon.svg";
import myPhoto from "./images/MyPhoto.jpg";

export default function App() {
  return (
    <>
      <nav className="nav-bar">
        <div>
          <img src={logoWallace} alt="Perfil Logo" />
        </div>
        <div className="navigator">
          <p>Home</p>
          <p>Sobre Mim</p>
          <p>Portifólio</p>
          <p>Skills</p>
          <p>Carreira</p>
          <p>Recomendações</p>
          <p>Contato</p>
        </div>
      </nav>
      <main>
        {/* MINHAS INFORMAÇÕES PRINCIPAIS */}
        <section className="main-info">
          <div className="my-info">
            <h2>👋 Saudações!</h2>
            <h1>
              Wallace <br />
              Vieira{" "}
            </h1>
            <p>Fullstack developer</p>
            <img src={socialMedias} alt="Social Medias" />
          </div>
          <div>
            <img className="my-paint" src={fotoPerfil} alt="Perfil Photo" />
          </div>
          <div className="my-cv">
            <img className="cvDown" src={cvDown} alt="Download my CV" />
            <img
              className="whatsapp"
              src={whatsapp}
              alt="Tell me in whatsapp"
            />
          </div>
        </section>
        <div className="line"></div>
        {/* MINHAS EXPERIÊNCIAS */}
        <section className="my-exp">
          <span>
            <div>
              <img src={codeIcon} alt="Ícone de código" />
              <p>2 anos estudando</p>
              <h2>Programação</h2>
            </div>
            <div>
              <img src={projectIcons} alt="Ícone de Gráficos" />
              <p>Planejando transição de</p>
              <h2>Carreira</h2>
            </div>
            <div>
              <img src={designIcon} alt="Ícone de design" />
              <p>Análise e Desenvolvimento de</p>
              <h2>Sistemas</h2>
            </div>
          </span>
          <div className="my-job">
            <p>DESENVOLVEDOR</p>
            <h2>FULLSTACK</h2>
          </div>
        </section>
        <div className="line"></div>
        {/* SOBRE MIM */}
        <section className="about-me">
          <div>
            <img src={myPhoto} alt="Minha foto" />
            <h2>Trabalhos e Projetos</h2>
          </div>
          <div>
            <h3>🤓 Sobre mim</h3>
            <h2>Wallace Vieira Dias Castro</h2>
            <p>
              👋 Me chamo Washington Henrique Fernandes de Sousa, mas pode me
              chamar apenas de Henrique. Prazer!
            </p>
            <p>
              👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com
              JavaScript, React JS e Typescript. <br />
              🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de
              São José dos Campos <br />
              💡 Interesses em desenvolvimento Front-end com React, React
              Native, VueJS e UX/UI Design.
            </p>
            <p>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
          </div>
        </section>
        <div className="line"></div>
        {/* MEUS PROJETOS */}
        <section className="my-projects">
          <div className="proj-container"></div>
          <div className="proj-container"></div>
          <div className="proj-container"></div>
          <div className="proj-container"></div>
          <div className="proj-container"></div>
          <div className="proj-container"></div>
          <div className="proj-container"></div>
          <div className="proj-container"></div>
        </section>
        {/* MINHAS TECNOLOGIAS */}
        <section className="my-skills"></section>
        {/* CONTATOS */}
        <section className="my-contacts"></section>
        {/* RODAPÉ */}
        <footer></footer>
      </main>
    </>
  );
}
