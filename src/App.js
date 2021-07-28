import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/globals';
import { lightTheme, darkTheme } from 'styles/themes';
import Header from 'components/header/Header';
import SideNav from 'components/side-nav/SideNav';
import Content from 'components/content/Content';

export default function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header theme={theme} themeToggler={themeToggler} />
      <SideNav />
      <Content />
    </ThemeProvider>
  );
}
