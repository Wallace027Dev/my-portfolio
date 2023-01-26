import "./styles/App.css";
import "animate.css";
import Project from "./components/Project";
import fotoPerfil from "./images/logo-perfil.svg";
import logoWallace from "./images/logo-wallace.svg";
import whatsapp from "./images/Whatsapp.svg";
import cvDown from "./images/CVDownload.svg";
import designIcon from "./images/DesignIcon.svg";
import projectIcons from "./images/ProjectsIcon.svg";
import codeIcon from "./images/CodeIcon.svg";
import myPhoto from "./images/MyPhoto.jpg";
import emBreve from "./images/EmBreve.png";
import react from "./images/React.svg";
import js from "./images/Javascript.svg";
import html from "./images/HTML5.svg";
import css from "./images/CSS3.svg";
import github from "./images/Github.svg";
import git from "./images/Git.svg";
import node from "./images/Nodejs.svg";
import tailwind from "./images/TailwindCSS.svg";
import sass from "./images/Sass.svg";
import mysql from "./images/MySQL.svg";
import docker from "./images/Docker.svg";
import postcss from "./images/PostCSS.svg";
import webpack from "./images/Webpack.svg";
import firebase from "./images/Firebase.svg";
import vercel from "./images/Vercel.svg";
import babel from "./images/Babel.svg";
import c from "./images/C.svg";
import ts from "./images/TypeScript.svg";
import python from "./images/Python.svg";
import php from "./images/PHP.svg";
import java from "./images/Java.svg";
import npm from "./images/npm.svg";
import copy from "./images/copy.svg";
import email from "./images/email.svg";
import arrowUp from "./images/ArrowUp.svg";
import linkedinWhite from "./images/linkedin.svg";
import githubWhite from "./images/github-white.svg";
import cvWallace from "./images/cv-wallace.jpg";
import authStorage from "./images/projectThumbs/auth-storage.png";

//CALCULADOR DE TEMPO QUE ESTUDO PROGRAMAÇÃO
function devCount() {
  const today = new Date();
  const startDev = new Date("2020/09/23");
  let age = today.getFullYear() - startDev.getFullYear();
  const mon = today.getMonth() - startDev.getMonth();

  if (mon < 0 || (mon === 0 && today.getDate() < startDev.getDate())) {
    age--;
  }

  return age;
}

export default function App() {
  return (
    <>
      <nav className="disappearCellphone">
        <div className="nav center">
          <div className="nav-bar">
            <div>
              <img src={logoWallace} alt="Perfil Logo" />
            </div>
            <div className="navigator">
              <a href="#home">Home</a>
              <a href="#my-exp">Carreira</a>
              <a href="#about-me">Sobre Mim</a>
              <a href="#my-projects">Portifólio</a>
              <a href="#my-skills">Skills</a>
              <a href="#my-contacts">Contato</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="center col">
        {/* MINHAS INFORMAÇÕES PRINCIPAIS */}
        <section id="home" className="main-info center">
          <div className="my-info">
            <h2 className="section-bar center">👋 Saudações!</h2>
            <h1>
              Wallace <br />
              Vieira
            </h1>
            <p>Fullstack developer</p>
            <a href="https://www.linkedin.com/in/wallace-dev/">
              <img src={linkedinWhite} alt="Social Medias" />
            </a>
            <a href="https://github.com/Wallace027Dev">
              <img src={githubWhite} alt="Social Medias" />
            </a>
          </div>
          <div>
            <img className="my-paint" src={fotoPerfil} alt="Perfil Photo" />
          </div>
          <div className="my-cv">
            <a href={cvWallace} download="CV-Wallace">
              <img className="cvDown" src={cvDown} alt="Download my CV" />
            </a>
            <a href="https://wa.me/qr/YWSCEX37OD3QH1">
              <img
                className="whatsapp"
                src={whatsapp}
                alt="Tell me in whatsapp"
              />
            </a>
          </div>
        </section>
        <div className="line"></div>
        {/* MINHAS EXPERIÊNCIAS */}
        <section id="my-exp" className="my-exp">
          <span className="exp-span center">
            <div>
              <img src={codeIcon} alt="Ícone de código" />
              <p>{devCount()} anos estudando</p>
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
          <div className="my-job center">
            <p>DESENVOLVEDOR</p>
            <h2>FULLSTACK</h2>
          </div>
        </section>
        <div className="line"></div>
        {/* SOBRE MIM */}
        <section id="about-me" className="about-me center">
          <div className="center col">
            <img src={myPhoto} alt="Minha foto" />
            <h3 className="section-bar center disappearTablet">🔗 Portfólio</h3>
            <h2 className="disappearTablet">Trabalhos e Projetos</h2>
          </div>
          <div>
            <h3 className="section-bar center">🤓 Sobre mim</h3>
            <h2>Wallace Vieira Dias Castro</h2>
            <p>👋 Olá mundo!</p>
            <span className="about-span">
              <p>
                👨‍💻 Apaixonado por programação a {devCount()} anos. <br />
                🎓 Cursando Análise e Desenvolvimento de Sistemas pela{" "}
                <a href="https://estacio.br/">Estácio</a>
                <br />
                💡 Interesse em desenvolvimento Fullstack. <br />
                ❤️ Gosto de ler, jogar vôlei, assistir à séries e documentários,
                estudar programação e sair com amigos.
              </p>
              <p>
                🚀 "Lembra-te, portanto, desse teu poder qua a natureza te deu."{" "}
                <i>Marcus Aurélius</i>{" "}
              </p>
            </span>
          </div>
        </section>
        {/* MEUS PROJETOS */}
        <section id="my-projects" className="my-projects">
          <div>
            <Project
              projectName="Autenticação e Armazenamento"
              subtitle="Nesse projeto foi usado React, Routers e Firebase. Foi um exercício para fixar ferramentas do React e aplicar o Firebase em um projeto."
              skill1="Firebase"
              skill2="React JS"
              skill3="Tailwind"
              imageProject={authStorage}
              acess="Autenticação e Armazenamento"
              linkProject="https://autenticacao-e-armazenamento-react.vercel.app/login"
            />
            <Project
              projectName="Projeto vazio"
              subtitle=" Descrição do meu projeto futuro. Aqui vai ser colocado meu exemplo."
              skill1="Typescript"
              skill2="React JS"
              skill3="Tailwind"
              imageProject={emBreve}
              acess="Projeto de tal"
              linkProject="exemploLink"
            />
            <Project
              projectName="Projeto vazio"
              subtitle=" Descrição do meu projeto futuro. Aqui vai ser colocado meu exemplo."
              skill1="Typescript"
              skill2="React JS"
              skill3="Tailwind"
              imageProject={emBreve}
              acess="Projeto de tal"
              linkProject="exemploLink"
            />
            <Project
              projectName="Projeto vazio"
              subtitle=" Descrição do meu projeto futuro. Aqui vai ser colocado meu exemplo."
              skill1="Typescript"
              skill2="React JS"
              skill3="Tailwind"
              imageProject={emBreve}
              acess="Projeto de tal"
              linkProject="exemploLink"
            />
          </div>
        </section>
        <div className="line"></div>
        {/* MINHAS TECNOLOGIAS */}
        <section id="my-skills" className="my-skills center">
          <h3 className="section-bar center">🧑‍💻 Skills · Experiências</h3>
          <h2>Tecnologias e habilidades</h2>
          <p>Techs que uso no dia a dia</p>
          <div>
            <img src={html} alt="HMTL Image" />
            <img src={css} alt="CSS Image" />
            <img src={js} alt=" Javascript Image" />
            <img src={react} alt="React Image" />
            <img src={node} alt="Node Image" />
            <img src={tailwind} alt="Tailwind Image" />
            <img src={github} alt="Github Image" />
            <img src={git} alt="Git Image" />
            <img src={sass} alt="Sass Image" />
            <img src={mysql} alt="MySQL Image" />
            <img src={npm} alt="NPM Image" />
            <img src={vercel} alt="Vercel Image" />
            <img src={firebase} alt="Firebase" />
          </div>
          <p>Outras techs que já tive experiência</p>
          <div>
            <img src={python} alt="Python Image" />
            <img src={ts} alt="Typescript Image" />
            <img src={java} alt="Java Image" />
            <img src={c} alt="C Image" />
            <img src={php} alt="PHP Image" />
            <img src={docker} alt="Docker Image" />
            <img src={postcss} alt="PostCSS Image" />
            <img src={babel} alt="Babel Image" />
            <img src={webpack} alt="Webpack Image" />
          </div>
        </section>
        <div className="line"></div>
        {/* CONTATOS */}
        <section id="my-contacts" className="my-contacts center">
          <h3 className="section-bar center">📬 Contatos</h3>
          <h2>Vamos conversar!</h2>
          <div className="link-contacts center">
            <img src={whatsapp} alt="Meu whatsapp" />
            <div>
              <img className="email-image" src={email} alt="Meu email" />
              <p>wallaceofc@hotmail.com</p>
              <img className="copy-image" src={copy} alt="Ícone de copiar" />
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
              <img src={linkedinWhite} alt="Social Medias" />
            </a>
            <a href="https://github.com/Wallace027Dev">
              <img src={githubWhite} alt="Social Medias" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
