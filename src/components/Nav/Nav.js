import logoWallace from "../../images/logo-wallace.svg";
export default function Nav() {
  return (
    <nav className="disappearCellphone">
      <div className="nav center">
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
        </div>
      </div>
    </nav>
  );
}
