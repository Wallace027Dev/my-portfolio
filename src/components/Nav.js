import logoWallace from '../images/logo-wallace.svg';

import styled from 'styled-components';
import Switch from 'react-switch';
import scrollToSection from '../utils/scrollToSection';

const NavBar = styled.nav`
  /* Estilos comuns para a barra de navegação */
  .nav-bar {
    background-color: var(--secondary);
    width: 90%;
    height: 4rem;
    margin-top: 2.375rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
  }

  /* Estilos para os botões de navegação */
  .navigator button {
    margin: auto 0.75rem;
    color: var(--tertiary);
    font-weight: 700;
    cursor: pointer;
  }

  /* Estilos para a lista de navegação */
  @media screen and (max-width: 768px) {
    .nav-bar {
      width: 100%;
      padding: 0 0.75rem;
      border-radius: 0;
      height: 1.6rem;
    }
    .navigator {
      display: none;
    }
  }

  /* Exibir o ícone do menu móvel quando a tela for menor que 730px */
  @media screen and (max-width: 730px) {
    .nav-bar {
      padding: 1.5rem 4rem;
      margin-top: 0rem;
    }
    .navigator {
      display: none;
    }
    .nav-list {
      display: none;
    }
    .nav-item {
      display: none;
    }
  }
`;

export default function Nav(props) {
  return (
    <NavBar id="nav">
      <div className="center">
        <div className="nav-bar fade-and-fall">
          <div>
            <img src={logoWallace} alt="Perfil Logo" />
          </div>
          <div className="navigator">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="transit remove-effect-button"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('my-exp')}
              className="transit remove-effect-button"
            >
              Carreira
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('about-me')}
              className="transit remove-effect-button"
            >
              Sobre Mim
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('my-projects')}
              className="transit remove-effect-button"
            >
              Portfólio
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('my-skills')}
              className="transit remove-effect-button"
            >
              Habilidades
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('my-contacts')}
              className="transit remove-effect-button"
            >
              Contato
            </button>
          </div>
          <div>
            <Switch
              onChange={props.toggleTheme}
              checked={props.theme.name === 'dark'}
              height={20}
              width={40}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={20}
              onHandleColor="#dcdce7"
              offColor="#6B52A2"
              onColor="rgba(123, 74, 226, 0.1)"
            />
          </div>
        </div>
      </div>
    </NavBar>
  );
}
