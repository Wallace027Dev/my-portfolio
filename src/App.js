import "./styles/App.css";
import Project from "./components/Project";
import fotoPerfil from "./images/logo-perfil.svg";
import logoWallace from "./images/logo-wallace.svg";
import socialMedias from "./images/SocialMedias.svg";
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
          <div>
            <Project
              project="Projeto vazio"
              subtitle=" Descrição do meu projeto futuro. Aqui vai ser colocado meu exemplo."
              skill1="Typescript"
              skill2="React JS"
              skill3="Tailwind"
              imageProject={emBreve}
              acess="Projeto de tal"
            />
            <Project
              project="Projeto vazio"
              subtitle=" Descrição do meu projeto futuro. Aqui vai ser colocado meu exemplo."
              skill1="Typescript"
              skill2="React JS"
              skill3="Tailwind"
              imageProject={emBreve}
              acess="Projeto de tal"
            />
            <Project
              project="Projeto vazio"
              subtitle=" Descrição do meu projeto futuro. Aqui vai ser colocado meu exemplo."
              skill1="Typescript"
              skill2="React JS"
              skill3="Tailwind"
              imageProject={emBreve}
              acess="Projeto de tal"
            />
            <Project
              project="Projeto vazio"
              subtitle=" Descrição do meu projeto futuro. Aqui vai ser colocado meu exemplo."
              skill1="Typescript"
              skill2="React JS"
              skill3="Tailwind"
              imageProject={emBreve}
              acess="Projeto de tal"
            />
          </div>
        </section>
        <div className="line"></div>
        {/* MINHAS TECNOLOGIAS */}
        <section className="my-skills">
          <h3>🧑‍💻 Skills · Experiências</h3>
          <h2>Tecnologias e habilidades</h2>
          <p>Techs que uso no dia a dia</p>
          <div>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
            <img src={node} alt="" />
            <img src={tailwind} alt="" />
            <img src={github} alt="" />
            <img src={git} alt="" />
						<img src={sass} alt="" />
            <img src={mysql} alt="" />
						<img src={npm} alt="" />
            <img src={vercel} alt="" />
            <img src={firebase} alt="" />
          </div>
          <p>Outras techs que já tive experiência</p>
          <div>
            <img src={python} alt="" />
            <img src={ts} alt="" />
            <img src={java} alt="" />
            <img src={c} alt="" />
            <img src={php} alt="" />
            <img src={docker} alt="" />
            <img src={postcss} alt="" />
            <img src={babel} alt="" />
            <img src={webpack} alt="" />
          </div>
        </section>
        <div className="line"></div>
        {/* CONTATOS */}
        <section className="my-contacts"></section>
        {/* RODAPÉ */}
        <footer></footer>
      </main>
    </>
  );
}
