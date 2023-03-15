import cvWallace from "../images/cv-wallace.jpg";
import cvDown from "../images/CVDownload.svg";
import fotoPerfil from "../images/logo-perfil.svg";
import linkedinWhite from "../images/linkedin.svg";
import githubWhite from "../images/github-white.svg";
import whatsapp from "../images/Whatsapp.svg";
import styled from "styled-components";

const Main = styled.section`
  margin-top: 12rem;
  gap: 15%;
  .my-info {
    h1 {
      font-weight: 800;
      font-size: 3.25rem;
      margin-bottom: 1.5rem;
    }
    p {
      color: var(--tertiary);
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
    img {
      height: 2.125rem;
      margin-right: 1rem;
    }
  }
  .my-paint {
    height: 37.5rem;
  }
  .my-cv {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    cursor: pointer;
    .cvDown {
      width: 5.95rem;
      margin-bottom: 0.5rem;
    }
    .whatsapp {
      width: 12.25rem;
    }
  }
`;

export default function MainInfo() {
  return (
    <Main id="home" className="main-info center">
      <div className="my-info">
        <h2 className="section-bar center">👋 Saudações!</h2>
        <h1>
          Wallace <br />
          Vieira
        </h1>
        <p>Fullstack developer</p>
        <a href="https://www.linkedin.com/in/wallace-dev/">
          <img className="transit" src={linkedinWhite} alt="Social Medias" />
        </a>
        <a href="https://github.com/Wallace027Dev">
          <img className="transit" src={githubWhite} alt="Social Medias" />
        </a>
      </div>
      <div>
        <img className="my-paint" src={fotoPerfil} alt="Wallace" />
      </div>
      <div className="my-cv">
        <a href={cvWallace} download="CV-Wallace">
          <img className="cvDown transit" src={cvDown} alt="Download my CV" />
        </a>
        <a href="https://wa.me/qr/YWSCEX37OD3QH1">
          <img
            className="whatsapp transit"
            src={whatsapp}
            alt="Tell me in whatsapp"
          />
        </a>
      </div>
    </Main>
  );
}
