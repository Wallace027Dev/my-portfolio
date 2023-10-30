import { Splide, SplideSlide } from '@splidejs/react-splide';

import Container from './styles';
import ProjectModule from '../ProjectModule';

import authStorage from '../../images/projectThumbs/auth-storage.png';
import todoPrint from '../../images/projectThumbs/todoPrint.png';
import postsApi from '../../images/projectThumbs/postsApi.png';
import staartClone from '../../images/projectThumbs/staartClone.png';
import bakoads from '../../images/projectThumbs/bakoads.png';
import mariaVitoria from '../../images/projectThumbs/mariaVitoria.png';
import ofcBordados from '../../images/projectThumbs/ofcBordados.png';

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
            projectName="Dashboard para Anúncios"
            subtitle="A pedido da empresa de anúncios, foi feita uma plataforma de controle de seus clientes e suas informações, e devolver os dados dos anúncios em um dashboard."
            skill1="React"
            skill2="Express"
            skill3="Postgres"
            imageProject={bakoads}
            acess="Bakoads Anúncios"
            linkProject="https://github.com/Wallace027Dev/loran-m-rosa"
          />
        </SplideSlide>
        <SplideSlide>
          <ProjectModule
            className="carrossel-item"
            projectName="Site Institucional"
            subtitle="Site Institucional para a Oficina de Bordados. Feito para uma empresa com vários anos de mercado em todo o Espírito Santo."
            skill1="React JS"
            skill2="React Router"
            skill3="Styled-comp"
            imageProject={ofcBordados}
            acess="Oficina de Bordados"
            linkProject="https://github.com/Wallace027Dev/ofc-site"
          />
        </SplideSlide>
        <SplideSlide>
          <ProjectModule
            className="carrossel-item"
            projectName="Plataforma de Cursos"
            subtitle="Projeto final da Staart, onde a proposta era fazer uma plataforma de cursos, 
            criando um design do zero e consumindo uma api com as informações dos cursos.."
            skill1="React JS"
            skill2="Axios"
            skill3="Styled-comp"
            imageProject={staartClone}
            acess="Staart Clone"
            linkProject="https://github.com/Wallace027Dev/staart-clone"
          />
        </SplideSlide>

        <SplideSlide>
          <ProjectModule
            className="carrossel-item"
            projectName="Portifólio - Maria Vitória"
            subtitle="Portifólio feito para a artista Maria Vitória. Foram feitas 3 divisões, para os tipos das artes apresentadas, e colocado links para contactá-la."
            skill1="React JS"
            skill2="React Router"
            skill3="Styled-comp"
            imageProject={mariaVitoria}
            acess="Portifólio - Maria Vitória"
            linkProject="https://github.com/Wallace027Dev/portfolio-mavi"
          />
        </SplideSlide>
        <SplideSlide>
          <ProjectModule
            className="carrossel-item"
            projectName="Autenticação e Armazenamento"
            subtitle="Nesse projeto foi usado React, Routers e Firebase."
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
            projectName="Lista de Tarefas"
            subtitle="Uma lista de tarefas desenvolvida com JS puro, manipulando o DOM e Eventos()."
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
            subtitle="Projeto de media social, onde posts são sumbetidos, e, enviados e salvos em uma API."
            skill1="Node"
            skill2="React JS"
            skill3="Fetch API"
            imageProject={postsApi}
            acess="Social Media"
            linkProject="https://consumo-de-api-com-react.vercel.app/"
          />
        </SplideSlide>
      </Splide>
    </Container>
  );
}
