import myPhoto from '../../images/MyPhoto.jpeg';
import SectionBar from '../SectionBar';
import { Container } from './styles';

export default function AboutMe() {
  return (
    <Container id="about-me" className="about-me center">
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
    </Container>
  );
}
