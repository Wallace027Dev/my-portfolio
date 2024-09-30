import { Container } from './style';

import whatsapp from '../../images/Whatsapp.svg';
import copy from '../../images/copy.svg';
import email from '../../images/email.svg';
import arrowUp from '../../images/ArrowUp.svg';

import SectionBar from '../../components/SectionBar';

import scrollToSection from '../../utils/scrollToSection';
import handleWhatsAppRedirect from '../../utils/handleWhatsAppRedirect';

export default function MyContacts() {
  return (
    <Container id="my-contacts" className="center">
      <SectionBar icon="📬" text="Contatos!" />
      <h1>Vamos conversar!</h1>
      <div className="link-contacts center">
        <button
          type="button"
          className="remove-effect-button"
          onClick={handleWhatsAppRedirect}
        >
          <img className="transit" src={whatsapp} alt="Meu whatsapp" />
        </button>
        <div className="center">
          <img className="email-image" src={email} alt="Meu email" />
          <p>wallaceofc@hotmail.com</p>
          <img
            className="copy-image transit"
            src={copy}
            alt="Ícone de copiar"
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={() => scrollToSection('nav')}
          className="transit remove-effect-button"
        >
          Voltar ao topo <img src={arrowUp} alt="Seta para cima" />{' '}
        </button>
      </div>
    </Container>
  );
}
