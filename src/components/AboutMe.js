import devCount from "../utils/devCount";
import myPhoto from "../images/MyPhoto.jpg";

export default function AboutMe() {
	return (
		<section id="about-me" className="about-me center">
		<div className="center col">
			<img src={myPhoto} alt="Minha foto" />
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
	</section>
	)
}