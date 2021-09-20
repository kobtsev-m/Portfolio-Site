import { ReactNode, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { withTranslation } from 'react-i18next';
import { darkTheme, GlobalStyle, lightTheme } from 'styles';
import { Theme } from 'types';
import { SideNav, Header } from 'components/templates';
import 'locales/i18n';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = withTranslation()((props: LayoutProps) => {
  const { children } = props;
  const [theme, setTheme] = useState(Theme.Dark);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    localStorage.setItem('theme', Theme[newTheme]);
    setTheme(newTheme);
  };

  useEffect(() => {
    if (localStorage.getItem('theme') !== Theme[Theme.Dark]) {
      setTheme(Theme.Light);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === Theme.Dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <SideNav />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
    </ThemeProvider>
  );
});
