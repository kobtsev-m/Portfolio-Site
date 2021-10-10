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
      grey: string;
      lightGrey: string;
      thin: string;
      danger: string;
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
    layout: '#202020',
    grey: 'rgba(255, 255, 255, 0.2)',
    lightGrey: 'rgba(255, 255, 255, 0.5)',
    thin: 'rgba(255, 255, 255, 0.1)',
    danger: '#ab2c48'
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
    layout: '#FFFFFF',
    grey: 'rgba(27, 27, 27, 0.2)',
    lightGrey: 'rgba(27, 27, 27, 0.5)',
    thin: 'rgba(27, 27, 27, 0.1)',
    danger: '#d70000'
  }
};
