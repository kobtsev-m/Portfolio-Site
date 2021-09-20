import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 4rem;
`;

export const DescriptionText = styled.p`
  color: ${({ theme }) => theme.color.lightGrey};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-style: normal;
  font-weight: normal;
  font-size: 0.2rem;
  line-height: 0.3rem;
  letter-spacing: 0.08em;
`;
