import "./styles/App.css";
import Nav from "./components/Nav";
import MainInfo from "./components/MainInfo";
import MyExp from "./components/MyExp";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import MyContacts from "./components/MyContacts";

//FUNCÃO DE COPIAR EMAIL

export default function App() {
  return (
    <>
      <Nav />
      <main className="center col">
        {/* MINHAS INFORMAÇÕES PRINCIPAIS */}
        <MainInfo />
        <div className="line"></div>
        {/* MINHAS EXPERIÊNCIAS */}
        <MyExp />
        <div className="line"></div>
        {/* SOBRE MIM */}
        <AboutMe />
        {/* MEUS PROJETOS */}
        <MyProjects />
        <div className="line"></div>
        {/* MINHAS TECNOLOGIAS */}
        <MySkills />
        <div className="line"></div>
        {/* CONTATOS */}
        <MyContacts />
        {/* RODAPÉ */}
        
      </main>
    </>
  );
}
