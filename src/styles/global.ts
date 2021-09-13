import { createGlobalStyle } from 'styled-components';
import { media } from './media';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.font};
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 0.2rem;
    overflow-x: hidden;
  }
  :root {
    ${media('xs', 'font-size: 75px')};
    ${media('sm', 'font-size: 80px')};
    ${media('md', 'font-size: 85px')};
    ${media('lg', 'font-size: 90px')};
    ${media('xl', 'font-size: 95px')};
    ${media('xxl', 'font-size: 100px')};
  }
`;
