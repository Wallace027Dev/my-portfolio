import devCount from "../utils/devCount";
import myPhoto from "../images/MyPhoto.jpg";
import styled from "styled-components";

const AboutStyle = styled.section`
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .myImg {
    width: 20rem;
    height: 20rem;
    border-radius: 20rem;
    border: var(--font-color) solid 0.5rem;
    margin-bottom: 1.5rem;
  }

  .about-me {
    text-align: center;
    h2 {
      font-weight: 800;
      font-size: 2.5rem;
      margin: 1rem 0;
    }

    a {
      color: var(--tertiary);
    }
  }

  .about-span {
    margin: 1rem auto;
    p {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      color: var(--tertiary);
      max-width: 22rem;
    }
  }

  @media screen and (min-width: 320px) {
    .myImg {
      width: 16rem;
      height: 16rem;
    }

    .about-me {
      h2 {
        font-size: 3rem;
        margin: 1.5rem 0;
      }

      p {
        font-size: 1.125rem;
        max-width: 16rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

    .myImg {
      width: 28rem;
      height: 28rem;
      margin-bottom: 0;
    }

    .about-me {
      text-align: left;
      h2 {
        font-size: 3rem;
        margin: 1.5rem 0;
      }

      p {
        font-size: 1.125rem;
        max-width: 56.25rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .myImg {
      width: 36rem;
      height: 36rem;
    }

    .about-me {
      h2 {
        font-size: 3.5rem;
        margin: 2rem 0;
      }

      p {
        font-size: 1.25rem;
      }
    }
  }
`;

export default function AboutMe() {
  return (
    <AboutStyle id="about-me" className="about-me center">
      <div className="center col">
        <img className="myImg" src={myPhoto} alt="Minha foto" />
        <h3 className="section-bar center disappearTablet">🔗 Portfólio</h3>
        <h2 className="disappearTablet">Trabalhos e Projetos</h2>
      </div>
      <div className="about-span">
        <div className="center col">
          <h3 className="section-bar center">🤓 Sobre mim</h3>
          <h2>Wallace Vieira Dias Castro</h2>
          <br />
        </div>
        <p>👋 Olá mundo!</p>
        <span>
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
  );
}
