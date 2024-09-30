import authStorage from "../../images/projectThumbs/auth-storage.png";
import todoPrint from "../../images/projectThumbs/todoPrint.png";
import postsApi from "../../images/projectThumbs/postsApi.png";
import staartClone from "../../images/projectThumbs/staartClone.png";
import bakoads from "../../images/projectThumbs/bakoads.png";
import mariaVitoria from "../../images/projectThumbs/mariaVitoria.png";
import ofcBordados from "../../images/projectThumbs/ofcBordados.png";

export const projects = [
  {
    projectName: "Dashboard para Anúncios",
    subtitle:
      "A pedido da empresa de anúncios, foi feita uma plataforma de controle de seus clientes e suas informações, e devolver os dados dos anúncios em um dashboard.",
    skills: ["React", "Express", "Postgres"],
    imageProject: bakoads,
    access: "Bakoads Anúncios",
    linkProject: "https://github.com/Wallace027Dev/loran-m-rosa",
    linkSite: "https://bakoads.vercel.app"
  },
  {
    projectName: "Site Institucional",
    subtitle:
      "Site Institucional para a Oficina de Bordados. Feito para uma empresa com vários anos de mercado em todo o Espírito Santo.",
    skills: ["React JS", "React Router", "Styled-comp"],
    imageProject: ofcBordados,
    access: "Oficina de Bordados",
    linkProject: "https://github.com/Wallace027Dev/ofc-site",
    linkSite: "https://ofcbordados.com.br"
  },
  {
    projectName: "Plataforma de Cursos",
    subtitle:
      "Projeto final da Staart, onde a proposta era fazer uma plataforma de cursos, criando um design do zero e consumindo uma API com as informações dos cursos.",
    skills: ["React JS", "Axios", "Styled-comp"],
    imageProject: staartClone,
    access: "Staart Clone",
    linkProject: "https://github.com/Wallace027Dev/staart-clone",
    linkSite: "https://staart-clone.vercel.app"
  },
  {
    projectName: "Portifólio - Maria Vitória",
    subtitle:
      "Portifólio feito para a artista Maria Vitória. Foram feitas 3 divisões, para os tipos das artes apresentadas, e colocado links para contactá-la.",
    skills: ["React JS", "React Router", "Styled-comp"],
    imageProject: mariaVitoria,
    access: "Portifólio - Maria Vitória",
    linkProject: "https://github.com/Wallace027Dev/portfolio-mavi",
    linkSite: "https://mariafranca.vercel.app"
  },
  {
    projectName: "Autenticação",
    subtitle: "Nesse projeto foi usado React, Routers e Firebase.",
    skills: ["Firebase", "React JS", "Javascript"],
    imageProject: authStorage,
    access: "Autenticação",
    linkSite: "https://autenticacao-e-armazenamento-react.vercel.app/login",
    linkProject:
      "https://github.com/Wallace027Dev/Autenticacao-armazenamento-dados-react"
  },
  {
    projectName: "Lista de Tarefas",
    subtitle:
      "Uma lista de tarefas desenvolvida com JS puro, manipulando o DOM e Eventos().",
    skills: ["Javascript", "Babel", "Tailwind"],
    imageProject: todoPrint,
    access: "To Do List",
    linkProject: "https://to-do-olive-six.vercel.app/",
    linkSite: "https://to-do-olive-six.vercel.app/"
  },
  {
    projectName: "Media Social",
    subtitle:
      "Projeto de mídia social, onde posts são submetidos, enviados e salvos em uma API.",
    skills: ["Node", "React JS", "Fetch API"],
    imageProject: postsApi,
    access: "Social Media",
    linkProject: "https://github.com/Wallace027Dev/Consumo-de-API-React/",
    linkSite: "https://consumo-de-api-com-react.vercel.app/"
  }
];
