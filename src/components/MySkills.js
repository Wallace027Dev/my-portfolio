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
`;

export default function MySkills() {
  return (
    <Skills>
      <div id="my-skills" className="my-skills center">
        <h3 className="section-bar center">🧑‍💻 Skills · Experiências</h3>
        <h2>Tecnologias e habilidades</h2>
        <p>Techs que uso no dia a dia</p>
        <div>
          <img className="transit" src={html} alt="HMTL Image" />
          <img className="transit" src={css} alt="CSS Image" />
          <img className="transit" src={js} alt=" Javascript Image" />
          <img className="transit" src={react} alt="React Image" />
          <img className="transit" src={node} alt="Node Image" />
          <img className="transit" src={tailwind} alt="Tailwind Image" />
          <img className="transit" src={github} alt="Github Image" />
          <img className="transit" src={git} alt="Git Image" />
          <img className="transit" src={npm} alt="NPM Image" />
          <img className="transit" src={vercel} alt="Vercel Image" />
          <img className="transit" src={firebase} alt="Firebase" />
        </div>
        <p>Outras techs que já tive experiência</p>
        <div>
          <img className="transit" src={sass} alt="Sass Image" />
          <img className="transit" src={mysql} alt="MySQL Image" />
          <img className="transit" src={python} alt="Python Image" />
          <img className="transit" src={ts} alt="Typescript Image" />
          <img className="transit" src={java} alt="Java Image" />
          <img className="transit" src={c} alt="C Image" />
          <img className="transit" src={php} alt="PHP Image" />
          <img className="transit" src={docker} alt="Docker Image" />
          <img className="transit" src={postcss} alt="PostCSS Image" />
          <img className="transit" src={babel} alt="Babel Image" />
          <img className="transit" src={webpack} alt="Webpack Image" />
        </div>
      </div>
    </Skills>
  );
}
