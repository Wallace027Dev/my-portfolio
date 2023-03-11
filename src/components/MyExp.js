import designIcon from "../images/DesignIcon.svg";
import projectIcons from "../images/ProjectsIcon.svg";
import codeIcon from "../images/CodeIcon.svg";
import devCount from "../utils/devCount";
import styled from "styled-components";

const Exp = styled.section`
	.my-exp, .my-job {
		flex-direction: column;
		border-radius: 1rem;
	}
	.exp-span {
		gap: 5rem;
		div {
			flex-direction: column;
			border: 1px solid var(--primary);
			border-radius: 1rem;
			width: 15rem;
			height: 12.5rem;
		}
	}

	.my-exp p {
		font-size: 1rem;
		}

	.my-exp h2 {
		font-size: 2rem;
		}
		
	.my-job {
		margin-top: 2rem;
		width: 56.25rem;
		height: 5rem;
		color: var(--primary);
		background-color: var(--secondary);
	}

	.my-job h2 {
		letter-spacing: 1rem;
	}
`

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
