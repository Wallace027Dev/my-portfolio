import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import '../styles/App.css';
import MyComponent from '../styles/global';
import light from '../themes/light';
import dark from '../themes/dark';

import Nav from './Nav';
import MainInfo from './MainInfo';
import MyExp from './MyExp';
import AboutMe from './AboutMe';
// import MyProjects from './MyProjects';
import MySkills from './MySkills';
import MyContacts from './MyContacts';
import Footer from './Footer';
import Slider from './Slider';

export default function App() {
  const [theme, setTheme] = useState(light);

  const onChangeTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav toggleTheme={onChangeTheme} theme={theme} />
        <main className="center col">
          <MainInfo />
          <div className="line"></div>
          <MyExp />
          <div className="line"></div>
          <AboutMe />
          <div className="line"></div>
          {/* <MyProjects /> */}
          <Slider />
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
