import whatsapp from "../images/Whatsapp.svg";
import copy from "../images/copy.svg";
import email from "../images/email.svg";
import arrowUp from "../images/ArrowUp.svg";
import styled from "styled-components";

const Contacts = styled.section`
  gap: 3rem;
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
    margin-bottom: 3rem;
  }
  .link-contacts {
    > img {
      height: 3.75rem;
      margin-right: 2.5rem;
      cursor: pointer;
    }
    flex-direction: column;
    font-size: 1.25rem;
    color: var(--tertiary);
    div {
      flex-direction: column;
      margin-top: 2rem;
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

  @media (min-width: 425px) {
    text-align: center;
    h2 {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    a {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    .link-contacts {
      > img {
        height: 3rem;
        margin-right: 2.5rem;
      }
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    .link-contacts {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      div {
        margin-top: 0;
        flex-direction: row;
        align-items: center;
        .email-image {
          height: 3rem;
          margin-right: 1.5rem;
          margin-bottom: 0;
        }
        .copy-image {
          height: 1.5rem;
          margin-top: 0;
          margin-right: 1.5rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    a {
      margin-bottom: 6rem;
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
      <a href="#home">
        Voltar ao topo <img src={arrowUp} alt="Seta para cima" />{" "}
      </a>
    </Contacts>
  );
}
