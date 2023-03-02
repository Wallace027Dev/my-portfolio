import designIcon from "../../images/DesignIcon.svg";
import projectIcons from "../../images/ProjectsIcon.svg";
import codeIcon from "../../images/CodeIcon.svg";
import devCount from "../../utils/devCount";

export default function MyExp(){
	return (
		<section id="my-exp" className="my-exp">
		<span className="exp-span center">
			<div>
				<img src={codeIcon} alt="Ícone de código" />
				<p>{devCount()} anos estudando</p>
				<h2>Programação</h2>
			</div>
			<div>
				<img src={projectIcons} alt="Ícone de Gráficos" />
				<p>Planejando transição de</p>
				<h2>Carreira</h2>
			</div>
			<div>
				<img src={designIcon} alt="Ícone de design" />
				<p>Análise e Desenvolvimento de</p>
				<h2>Sistemas</h2>
			</div>
		</span>
		<div className="my-job center">
			<p>DESENVOLVEDOR</p>
			<h2>FULLSTACK</h2>
		</div>
	</section>
	)
}