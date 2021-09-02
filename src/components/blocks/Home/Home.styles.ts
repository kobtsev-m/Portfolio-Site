import styled from 'styled-components';

export const HomeWrapper = styled.section`
  height: ${({ theme }) =>
    `calc(100vh - ${theme.navHeight} - ${theme.navMargin})`};
`;
