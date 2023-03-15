import linkedinWhite from "../images/linkedin.svg";
import githubWhite from "../images/github-white.svg";
import styled from "styled-components";

const Foot = styled.footer`
  background-color: var(--secondary);
  height: 5.5rem;
  width: 100%;
  flex-direction: row;
  gap: 5rem;
  .foot a {
    font-weight: 700;
    color: var(--primary);
  }
  .social-medias-foot img {
    margin: 0 1.25rem;
    height: 2rem;
  }
`;

export default function Footer() {
  return (
    <Foot className="center">
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
    </Foot>
  );
}
