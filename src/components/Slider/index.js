import { Splide, SplideSlide } from '@splidejs/react-splide';

import Container from './styles';
import ProjectModule from '../ProjectModule';

import authStorage from '../../images/projectThumbs/auth-storage.png';
import todoPrint from '../../images/projectThumbs/todoPrint.png';
import postsApi from '../../images/projectThumbs/postsApi.png';
import staartClone from '../../images/projectThumbs/staartClone.png';

export default function Slider() {
  return (
    <Container id="my-projects">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 2500,
          perPage: 3, // Para pc
          breakpoints: {
            1440: {
              perPage: 2, // Para notebook
            },
            1024: {
              perPage: 1, // Para tablet
            },
          },
        }}
      >
        <SplideSlide>
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
        </SplideSlide>
        <SplideSlide>
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
        </SplideSlide>
        <SplideSlide>
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
        </SplideSlide>
        <SplideSlide>
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
            acess="Projeto de tal"
            linkProject="exemploLink"
          />
        </SplideSlide>
      </Splide>
    </Container>
  );
}
