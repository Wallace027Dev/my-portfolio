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
        <MainInfo />
        <div className="line"></div>
        <MyExp />
        <div className="line"></div>
        <AboutMe />
        <div className="line"></div>
        <MyProjects />
        <div className="line"></div>
        <MySkills />
        <div className="line"></div>
        <MyContacts />
      </main>
    </>
  );
}
