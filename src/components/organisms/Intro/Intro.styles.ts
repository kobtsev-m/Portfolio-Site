import styled from 'styled-components';

export const IntroWrapper = styled.section`
  height: ${({ theme }) =>
    `calc(100vh - ${theme.navHeight} - ${theme.navMargin} - 50px)`};
`;
