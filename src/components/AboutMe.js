import devCount from '../utils/devCount';
import myPhoto from '../images/MyPhoto.jpg';
import styled from 'styled-components';
import SectionBar from './SectionBar';

const AboutStyle = styled.section`
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .myImg {
    width: 20rem;
    height: 20rem;
    border-radius: 20rem;
    border: var(--font-color) solid 0.25rem;
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
      width: 12rem;
      height: 12rem;
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
      width: 16rem;
      height: 16rem;
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
      width: 20rem;
      height: 20rem;
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
      </div>
      <div className="about-span">
        <div className="center col">
          <SectionBar icon="🤓" text="Sobre mim!" />
          <h2>Wallace Vieira Dias Castro</h2>
          <br />
        </div>
        <p>👋 Olá mundo!</p>
        <span>
          <p>
            ❤️ Gosto de ler, jogar vôlei, assistir à séries e documentários,
            estudar programação e sair com amigos.
            <br />
            👨‍💻 Me apaixonei pela programação por sempre gostar de tecnologia,
            coisas que envolvem criatividade, e pela inovação que posso trazer
            ao mundo.
            <br />
            🎓 Amo estudar. Quero ser um grande engenheiro de software, e
            aprender o possível do mundo da tecnologia.
            <br />
            💡 Acredito na melhora do mundo, com a descobertas das inovações
            tecnológicas. A tecnologia está em todo meio, por isso, quero deixar
            minha contribuição para a posteriedade.
          </p>
          <p>
            🚀 "Lembra-te, portanto, desse teu poder que a natureza te deu."{' '}
            <i>Marcus Aurélius</i>{' '}
          </p>
        </span>
      </div>
    </AboutStyle>
  );
}
