import authStorage from "../images/projectThumbs/auth-storage.png";
import authVideo from "../videos/authVideo.mp4";
import todoPrint from "../images/projectThumbs/todoPrint.png";
import todoVideo from "../videos/todoVideo.mp4";
import postsApi from "../images/projectThumbs/postsApi.png";
import socialVideo from "../videos/socialVideo.mp4";
import staartClone from "../images/projectThumbs/staartClone.png";
import staartVideo from "../videos/staartVideo.mp4";

import ProjectModule from "../components/ProjectModule";
import styled from "styled-components";

const Projects = styled.section`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 83rem;

  @media screen and (max-width: 1366px) {
    width: 56rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: none;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
  }

  .carrossel-item {
    width: 22.5rem;
    flex: 0 0 22.5rem;
    height: 28.75rem;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      margin-right: 1rem;
    }
  }
`;

export default function MyProjects() {
  return (
    <Projects id="my-projects" className="carroussel">
      <ProjectModule
        className="carrossel-item"
        projectName="Autenticação e Armazenamento"
        subtitle="Nesse projeto foi usado React, Routers e Firebase. Foi um exercício para fixar ferramentas do React e aplicar o Firebase em um projeto."
        skill1="Firebase"
        skill2="React JS"
        skill3="Javascript"
        imageProject={authStorage}
        videoProj={authVideo}
        acess="Autenticação e Armazenamento"
        linkProject="https://autenticacao-e-armazenamento-react.vercel.app/login"
      />
      <ProjectModule
        className="carrossel-item"
        projectName="To Do List"
        subtitle="Uma lista de tarefas desenvolvida com JS puro, manipulando o DOM e Eventos(). No projeto foi usado o pré-processador Tailwind para estilização e transpilado com Babel."
        skill1="Javascript"
        skill2="Babel"
        skill3="Tailwind"
        imageProject={todoPrint}
        videoProj={todoVideo}
        acess="To Do List"
        linkProject="https://to-do-olive-six.vercel.app/"
      />
      <ProjectModule
        className="carrossel-item"
        projectName="Media Social"
        subtitle="Projeto de media social, onde posts são sumbetidos, e, enviados e salvos em uma API. Por enquanto essa API só funciona quando executada em uma aplicação local, como explicado no repositório desse projeto no Github. Mas em breve estou adicionando um banco de dados funcional ao projeto."
        skill1="Node"
        skill2="React JS"
        skill3="Fetch API"
        imageProject={postsApi}
        videoProj={socialVideo}
        acess="Social Media"
        linkProject="https://consumo-de-api-com-react.vercel.app/"
      />
      <ProjectModule
        className="carrossel-item"
        projectName="Plataforma de Cursos"
        subtitle="Projeto final da Staart, onde a proposta era fazer uma plataforma de cursos,
				criando um design do zero e consumindo uma api com as informações dos cursos.
				Foi usado React, styled-components, axios, react router, e mais.
				"
        skill1="React JS"
        skill2="Axios"
        skill3="Styled-comp"
        imageProject={staartClone}
        videoProj={staartVideo}
        acess="Projeto de tal"
        linkProject="exemploLink"
      />
    </Projects>
  );
}
