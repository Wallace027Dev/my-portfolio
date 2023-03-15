import authStorage from "../images/projectThumbs/auth-storage.png";
import todoPrint from "../images/projectThumbs/todoPrint.png";
import postsApi from "../images/projectThumbs/postsApi.png";
import ProjectModule from "../components/ProjectModule";
import emBreve from "../images/EmBreve.png";
import styled from "styled-components";

const Projects = styled.section`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 90rem;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
  }
  .carrossel-item {
    width: 22.5rem;
    flex: 0 0 22.5rem;
    height: 100px;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
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
        acess="Social Media"
        linkProject="https://consumo-de-api-com-react.vercel.app/"
      />
      <ProjectModule
        className="carrossel-item"
        projectName="Projeto vazio"
        subtitle=" Descrição do meu projeto futuro. Aqui vai ser colocado meu exemplo."
        skill1="Typescript"
        skill2="React JS"
        skill3="Tailwind"
        imageProject={emBreve}
        acess="Projeto de tal"
        linkProject="exemploLink"
      />
    </Projects>
  );
}
