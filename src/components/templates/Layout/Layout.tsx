import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { darkTheme, lightTheme } from 'styles/theme';
import { Theme } from 'types/styled';
import { SideNav, Header } from 'components/templates';

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => {
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
