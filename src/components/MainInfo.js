import cvWallace from "../images/cv-wallace.jpg";
import cvDown from "../images/CVDownload.svg";
import fotoPerfil from "../images/logo-perfil.svg";
import linkedinWhite from "../images/linkedin.svg";
import githubWhite from "../images/github-white.svg";
import whatsapp from "../images/Whatsapp.svg";

export default function MainInfo() {
  return (
    <section id="home" className="main-info center">
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
        <img className="my-paint" src={fotoPerfil} alt="Perfil Photo" />
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
    </section>
  );
}
