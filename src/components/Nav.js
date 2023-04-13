import logoWallace from "../images/logo-wallace.svg";
import styled from "styled-components";

const NavBar = styled.nav`
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

    .navigator {
      display: flex;
      a {
        margin: auto 0.75rem;
        color: var(--tertiary);
        font-weight: 400;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .nav-bar {
      width: 100%;
      padding: 0 0.75rem;
      .navigator {
        display: none;
      }
    }
  }
`;

export default function Nav() {
  return (
    <NavBar>
      <div className="center">
        <div className="nav-bar">
          <div>
            <img src={logoWallace} alt="Perfil Logo" />
          </div>
          <div className="navigator">
            <a className="transit" href="#home">
              Home
            </a>
            <a className="transit" href="#my-exp">
              Carreira
            </a>
            <a className="transit" href="#about-me">
              Sobre Mim
            </a>
            <a className="transit" href="#my-projects">
              Portfólio
            </a>
            <a className="transit" href="#my-skills">
              Skills
            </a>
            <a className="transit" href="#my-contacts">
              Contato
            </a>
          </div>
          <div>
            TOGGLET
            <br />
            THEME
          </div>
        </div>
      </div>
    </NavBar>
  );
}
