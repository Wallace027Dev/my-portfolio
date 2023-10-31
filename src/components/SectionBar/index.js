import { Container } from './styles';

export default function SectionBar({ icon, text }) {
  return (
    <Container>
      <h2 className="section-bar center">
        <span className="waving-hand">{icon}</span> {text}
      </h2>
    </Container>
  );
}
