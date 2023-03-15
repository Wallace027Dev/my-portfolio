import devCount from "../utils/devCount";
import myPhoto from "../images/MyPhoto.jpg";
import styled from "styled-components";

const AboutStyle = styled.section`
  flex-direction: row;
  gap: 10%;

	.img {
		width: 28.125rem;
		height: 28.125rem;
		border-radius: 20rem;
		border: var(--font-color) solid 0.5rem;
		margin-bottom: 2rem;
	}
	.about-me {
		h2 {
			font-weight: 800;
			font-size: 3rem;
			margin: 1.5rem 0;
		}
		p {
			font-size: 1.125rem;
			margin-bottom: 1.5rem;
			color: var(--tertiary);
			max-width: 56.25rem;
		}
		a {
			color: var(--tertiary);
		}
	}
`

export default function AboutMe() {
	return (
		<AboutStyle id="about-me" className="about-me center">
		<div className="center col">
			<img className="img" src={myPhoto} alt="Minha foto" />
			<h3 className="section-bar center disappearTablet">🔗 Portfólio</h3>
			<h2 className="disappearTablet">Trabalhos e Projetos</h2>
		</div>
		<div>
			<h3 className="section-bar center">🤓 Sobre mim</h3>
			<h2>Wallace Vieira Dias Castro</h2>
			<p>👋 Olá mundo!</p>
			<span className="about-span">
				<p>
					👨‍💻 Apaixonado por programação a {devCount()} anos. <br />
					🎓 Cursando Análise e Desenvolvimento de Sistemas pela{" "}
					<a href="https://estacio.br/">Estácio</a>
					<br />
					💡 Interesse em desenvolvimento Fullstack. <br />
					❤️ Gosto de ler, jogar vôlei, assistir à séries e documentários,
					estudar programação e sair com amigos.
				</p>
				<p>
					🚀 "Lembra-te, portanto, desse teu poder qua a natureza te deu."{" "}
					<i>Marcus Aurélius</i>{" "}
				</p>
			</span>
		</div>
	</AboutStyle>
	)
}