import whatsapp from "../images/Whatsapp.svg";
import copy from "../images/copy.svg";
import email from "../images/email.svg";
import arrowUp from "../images/ArrowUp.svg";
import styled from "styled-components";

  const Contacts = styled.section`
    flex-direction: column;
    h2 {
      font-weight: 800;
      font-size: 3rem;
      margin-bottom: 4rem;
    }
    a {
      font-weight: 600;
      font-size: 1.25rem;
      color: var(--primary);
      display: flex;
      align-items: center;
      margin-bottom: 12.5rem;
    }
    .link-contacts {
      > img {
        height: 3.75rem;
        margin-right: 2.5rem;
        cursor: pointer;
      }
      flex-direction: row;
      font-size: 1.25rem;
      color: var(--tertiary);
      div {
        flex-direction: column;
        .email-image {
          height: 4.5rem;
          margin-bottom: 0.25rem;
        }
        .copy-image {
          height: 2rem;
          margin-top: 1.5rem;
          cursor: pointer;
        }
      }
    }
  `;

export default function MyContacts() {
	
  return (
    <Contacts id="my-contacts" className="center">
      <h3 className="section-bar center">📬 Contatos</h3>
      <h2>Vamos conversar!</h2>
      <div className="link-contacts center">
        <img className="transit" src={whatsapp} alt="Meu whatsapp" />
        <div className="center">
          <img className="email-image" src={email} alt="Meu email" />
          <p>wallaceofc@hotmail.com</p>
          <img
            className="copy-image transit"
            src={copy}
            alt="Ícone de copiar"
          />
        </div>
      </div>
      <a href="home">
        Voltar ao topo <img src={arrowUp} alt="Seta para cima" />{" "}
      </a>
    </Contacts>
  );
}
