import designIcon from "../images/DesignIcon.svg";
import projectIcons from "../images/ProjectsIcon.svg";
import codeIcon from "../images/CodeIcon.svg";
import devCount from "../utils/devCount";
import styled from "styled-components";

const Exp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .my-exp,
  .my-job {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    width: 100%;
    max-width: 56.25rem;
    margin-bottom: 2rem;
    padding: 1rem;
  }

  .exp-span {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;

    div {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--primary);
      border-radius: 1rem;
      width: 15rem;
      height: 15rem;
    }
    p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  .my-job {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    color: var(--primary);
    background-color: var(--secondary);
    h2 {
      font-size: 1.5rem;
      letter-spacing: 1rem;
      margin: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    .exp-span {
      flex-direction: row;
      justify-content: space-between;

      div {
        max-width: unset;
      }
    }
  }
`;

export default function MyExp() {
  return (
    <Exp id="my-exp" className="my-exp">
      <span className="exp-span center">
        <div className="center">
          <img src={codeIcon} alt="Ícone de código" />
          <p>{devCount()} anos estudando</p>
          <h2>Programação</h2>
        </div>
        <div className="center">
          <img src={projectIcons} alt="Ícone de Gráficos" />
          <p>Planejando transição de</p>
          <h2>Carreira</h2>
        </div>
        <div className="center">
          <img src={designIcon} alt="Ícone de design" />
          <p>Análise e Desenvolvimento de</p>
          <h2>Sistemas</h2>
        </div>
      </span>
      <div className="my-job center">
        <p>DESENVOLVEDOR</p>
        <h2>FULLSTACK</h2>
      </div>
    </Exp>
  );
}
