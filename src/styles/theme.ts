import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontMontserrat: string;
    fontOpenSans: string;
    navHeight: string;
    navMargin: string;
    background: string;
    fontColor: string;
    accentColor: string;
    secondaryColor: string;
  }
}

const theme = {
  fontMontserrat: '"Montserrat", sans-serif',
  fontOpenSans: '"Open Sans", sans-serif',
  navHeight: '110px',
  navMargin: '20px'
};

export const lightTheme: DefaultTheme = {
  ...theme,
  background: '#F4F4F4',
  fontColor: '#1B1B1B',
  accentColor: '#687349',
  secondaryColor: '#8D754F'
};

export const darkTheme: DefaultTheme = {
  ...theme,
  background: '#1B1B1B',
  fontColor: '#FFF',
  accentColor: '#80AFD7',
  secondaryColor: '#8D754F'
};
