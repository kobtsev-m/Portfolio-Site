import { css, createGlobalStyle } from 'styled-components';

const macros = css`
  .align-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .align-between {
    align-items: space-between;
  }
  .justify-between {
    justify-content: space-between;
  }
  .align-start {
    align-items: flex-start;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .align-end {
    align-items: flex-end;
  }
  .justify-end {
    justify-content: flex-end;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    font-family: ${({ theme }) => theme.fontMontserrat}
  }
  ${macros}
`;
