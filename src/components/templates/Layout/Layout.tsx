import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { darkTheme, lightTheme } from 'styles/theme';
import { Theme } from 'types/types';
import { SideNav, Header } from 'components/templates';

interface PropsType {
  children: React.ReactNode;
}

export const Layout = (props: PropsType) => {
  const { children } = props;
  const [theme, setTheme] = useState<Theme>(Theme.Dark);

  const toggleTheme = () => {
    theme === Theme.Dark ? setTheme(Theme.Light) : setTheme(Theme.Dark);
  };

  return (
    <ThemeProvider theme={theme === Theme.Dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <SideNav />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
    </ThemeProvider>
  );
};
