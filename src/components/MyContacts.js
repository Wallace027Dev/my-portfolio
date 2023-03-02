import whatsapp from "../images/Whatsapp.svg";
import copy from "../images/copy.svg";
import email from "../images/email.svg";
import arrowUp from "../images/ArrowUp.svg";

export default function MyContacts() {
  /* function execCopy() {
    navigator.clipboard.writeText("wallaceofc@hotmail.com");
    alert("Conteúdo copiado para a área de transferência!");
    console.log(execCopy());
  } */

  return (
    <section id="my-contacts" className="my-contacts center">
      <h3 className="section-bar center">📬 Contatos</h3>
      <h2>Vamos conversar!</h2>
      <div className="link-contacts center">
        <img className="transit" src={whatsapp} alt="Meu whatsapp" />
        <div>
          <img className="email-image" src={email} alt="Meu email" />
          <p>wallaceofc@hotmail.com</p>
          {/* <button onClick={execCopy()}> */}
          <img
            className="copy-image transit"
            src={copy}
            alt="Ícone de copiar"
          />
          {/* </button> */}
        </div>
      </div>
      <a href="#">
        Voltar ao topo <img src={arrowUp} alt="Seta para cima" />{" "}
      </a>
    </section>
  );
}
