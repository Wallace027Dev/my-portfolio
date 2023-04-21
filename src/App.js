import "./styles/App.css";
import light from "./themes/light";
import dark from "./themes/dark";
import MyComponent from "./styles/global";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Nav from "./components/Nav";
import MainInfo from "./components/MainInfo";
import MyExp from "./components/MyExp";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import MyContacts from "./components/MyContacts";
import Footer from "./components/Footer";

//FUNCÃO DE COPIAR EMAIL

export default function App() {
  const [theme, setTheme] = useState(dark);

  const onChangeTheme = () => {
    setTheme(theme.name === "dark" ? light : dark);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav toggleTheme = {onChangeTheme} theme={theme} />
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
          <Footer />
        </main>
        <MyComponent />
      </ThemeProvider>
    </>
  );
}
