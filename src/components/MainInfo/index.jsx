import { Container } from './style';

import cvWallace from '../../images/CV-WallaceVieira.jpg';
import cvDown from '../../images/CVDownload.svg';
import fotoPerfil from '../../images/logo-perfil.svg';
import linkedinWhite from '../../images/linkedin.svg';
import githubWhite from '../../images/github-white.svg';
import whatsapp from '../../images/Whatsapp.svg';

import handleWhatsAppRedirect from '../../utils/handleWhatsAppRedirect';

import SectionBar from '../SectionBar';

export default function MainInfo() {
  return (
    <Container id="home">
      <div className="profile fade-and-fall">
        <div className="my-info">
          <SectionBar icon="👋" text="Saudações!" />
          <h1>
            Wallace <br />
            Vieira
          </h1>
          <p>Desenvolvedor</p>
          <div>
            <a href="https://www.linkedin.com/in/wallace-dev/">
              <img
                className="transit"
                src={linkedinWhite}
                alt="Social Medias"
              />
            </a>
            <a href="https://github.com/Wallace027Dev">
              <img className="transit" src={githubWhite} alt="Social Medias" />
            </a>
          </div>
        </div>
        <div>
          <img className="my-paint " src={fotoPerfil} alt="Wallace" />
        </div>
        <div className="my-cv">
          <a href={cvWallace} download="CV-Wallace">
            <img className="cvDown transit" src={cvDown} alt="Download my CV" />
          </a>
          <button
            type="button"
            className="remove-effect-button"
            onClick={handleWhatsAppRedirect}
          >
            <img
              className="whatsapp transit"
              src={whatsapp}
              alt="Tell me in whatsapp"
            />
          </button>
        </div>
      </div>
    </Container>
  );
}
