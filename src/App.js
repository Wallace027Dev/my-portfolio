import "./styles/App.css";
import fotoPerfil from "./images/logo-perfil.svg";
import logoWallace from "./images/logo-wallace.svg";
import socialMedias from "./images/SocialMedias.svg";
import whatsapp from "./images/Whatsapp.svg";
import cvDown from "./images/CVDownload.svg";

export default function App() {
  return (
    <>
      <nav className="nav-bar">
        <div>
          <img src={logoWallace} alt="Perfil Logo" />
        </div>
        <div className="navigator">
          <p>Home</p>
          <p>Sobre Mim</p>
          <p>Portifólio</p>
          <p>Skills</p>
          <p>Carreira</p>
          <p>Recomendações</p>
          <p>Contato</p>
        </div>
      </nav>
      <main>
        <div className="my-info">
          <h2>👋 Saudações!</h2>
          <h1>
            Wallace <br />
            Vieira{" "}
          </h1>
          <p>Fullstack developer</p>
          <img src={socialMedias} alt="Social Medias" />
        </div>
        <div>
          <img className="my-paint" src={fotoPerfil} alt="Perfil Photo" />
        </div>
        <div className="my-cv">
          <img className="cvDown" src={cvDown} alt="Download my CV" />
          <img className="whatsapp" src={whatsapp} alt="Tell me in whatsapp" />
        </div>
      </main>
    </>
  );
}
