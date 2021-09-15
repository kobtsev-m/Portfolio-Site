import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
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
    ${media('xs', 'font-size: 65px')};
    ${media('sm', 'font-size: 70px')};
    ${media('md', 'font-size: 75px')};
    ${media('lg', 'font-size: 80px')};
    ${media('xl', 'font-size: 85px')};
    ${media('xxl', 'font-size: 90px')};
  }
  hr {
      border: none;
      height: 1px;
      background-color: ${({ theme }) => rgba(theme.color.font, 0.8)};
  }
  a {
      text-decoration: none;
      color: inherit;
  }
`;
