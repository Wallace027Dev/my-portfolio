import react from "../images/React.svg";
import js from "../images/Javascript.svg";
import html from "../images/HTML5.svg";
import css from "../images/CSS3.svg";
import github from "../images/Github.svg";
import git from "../images/Git.svg";
import node from "../images/Nodejs.svg";
import tailwind from "../images/TailwindCSS.svg";
import sass from "../images/Sass.svg";
import mysql from "../images/MySQL.svg";
import docker from "../images/Docker.svg";
import postcss from "../images/PostCSS.svg";
import webpack from "../images/Webpack.svg";
import firebase from "../images/Firebase.svg";
import vercel from "../images/Vercel.svg";
import babel from "../images/Babel.svg";
import c from "../images/C.svg";
import ts from "../images/TypeScript.svg";
import python from "../images/Python.svg";
import php from "../images/PHP.svg";
import java from "../images/Java.svg";
import npm from "../images/npm.svg";
import styled from "styled-components";

const Skills = styled.section`
  .my-skills {
    text-align: center;
    flex-direction: column;
    h2 {
      font-weight: 800;
      font-size: 3rem;
      margin-bottom: 6.25rem;
    }
    p {
      font-size: 1.5rem;
      color: var(--tertiary);
      margin-bottom: 2.5rem;
    }
    img {
      margin-right: 2rem;
      margin-bottom: 2.75rem;
    }
  }

	@media (max-width: 768px) {
    .my-skills {
      h2 {
        font-size: 2rem;
        margin-bottom: 3.125rem;
      }
      p {
        font-size: 1.25rem;
        margin-bottom: 1.875rem;
      }
      img {
        margin-right: 1rem;
        margin-bottom: 2rem;
      }
    }
  }
`;

export default function MySkills() {
  return (
    <Skills>
      <div id="my-skills" className="my-skills center">
        <h3 className="section-bar center">🧑‍💻 Skills · Experiências</h3>
        <h2>Tecnologias e habilidades</h2>
        <p>Techs que uso no dia a dia</p>
        <div>
          <img className="transit" src={js} alt=" Javascript" />
          <img className="transit" src={ts} alt="Typescript" />
          <img className="transit" src={react} alt="React" />
          <img className="transit" src={node} alt="Node" />
          <img className="transit" src={html} alt="HMTL" />
          <img className="transit" src={css} alt="CSS" />
          <img className="transit" src={github} alt="Github" />
          <img className="transit" src={git} alt="Git" />
          <img className="transit" src={npm} alt="NPM" />
          <img className="transit" src={vercel} alt="Vercel" />
          <img className="transit" src={docker} alt="Docker" />
        </div>
        <p>Outras techs que já tive experiência</p>
        <div>
          <img className="transit" src={mysql} alt="MySQL" />
          <img className="transit" src={tailwind} alt="Tailwind" />
          <img className="transit" src={postcss} alt="PostCSS" />
          <img className="transit" src={sass} alt="Sass" />
          <img className="transit" src={babel} alt="Babel" />
          <img className="transit" src={webpack} alt="Webpack" />
          <img className="transit" src={firebase} alt="Firebase" />
          <img className="transit" src={python} alt="Python" />
          <img className="transit" src={java} alt="Java" />
          <img className="transit" src={c} alt="C" />
          <img className="transit" src={php} alt="PHP" />
        </div>
      </div>
    </Skills>
  );
}
