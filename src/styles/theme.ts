import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'dark' | 'light';
    font: {
      montserrat: string;
      openSans: string;
    };
    color: {
      font: string;
      background: string;
      accent: string;
      secondary: string;
      layout: string;
    };
  }
}

const theme = {
  font: {
    montserrat: '"Montserrat", sans-serif',
    openSans: '"Open Sans", sans-serif'
  }
};

export const darkTheme: DefaultTheme = {
  ...theme,
  name: 'dark',
  color: {
    font: '#FFFFFF',
    background: '#1B1B1B',
    accent: '#80AFD7',
    secondary: '#8D754F',
    layout: '#202020'
  }
};

export const lightTheme: DefaultTheme = {
  ...theme,
  name: 'light',
  color: {
    font: '#1B1B1B',
    background: '#F4F4F4',
    accent: '#687349',
    secondary: '#8D754F',
    layout: '#FFFFFF'
  }
};
