import { Container } from './style'
import linkedinWhite from "../../images/linkedin.svg";
import githubWhite from "../../images/github-white.svg";

export default function Footer() {
  return (
    <Container className="center">
      <div className="foot">
        <p>
          Feito por{" "}
          <a href="https://www.linkedin.com/in/wallace-dev/">Wallace Vieira</a>{" "}
        </p>
      </div>
      <div className="social-medias-foot">
        <a href="https://www.linkedin.com/in/wallace-dev/">
          <img className="transit" src={linkedinWhite} alt="Social Medias" />
        </a>
        <a href="https://github.com/Wallace027Dev">
          <img className="transit" src={githubWhite} alt="Social Medias" />
        </a>
      </div>
    </Container>
  );
}
