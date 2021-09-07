import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { lightTheme, darkTheme } from 'styles/theme';
import Header from 'components/layout/Header/Header';
import SideNav from 'components/layout/SideNav/SideNav';
import Content from 'components/layout/Content/Content';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

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
