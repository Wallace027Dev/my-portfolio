import authStorage from "../images/projectThumbs/auth-storage.png";
import todoPrint from "../images/projectThumbs/todoPrint.png";
import postsApi from "../images/projectThumbs/postsApi.png";
import ProjectModule from "../components/ProjectModule";
import emBreve from "../images/EmBreve.png";
import styled from "styled-components";

const Projects = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  margin-top: 6.25rem;
`;

export default function MyProjects() {
  return (
    <Projects id="my-projects" className="my-projects">
      <ProjectModule
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
