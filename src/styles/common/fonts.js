import styled from 'styled-components';
import { rgba } from 'polished';

export const HomeTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontMontserrat};
  font-weight: 600;
  font-size: 70px;
  line-height: 85px;
  margin: 3rem 0 1.8rem;
`;

export const HomeSubTitle = styled.h3`
  color: ${({ theme }) => rgba(theme.accentColor, 0.9)};
  font-family: ${({ theme }) => theme.fontMontserrat};
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.02em;
  margin-bottom: 1.8rem;
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontMontserrat};
  font-size: 28px;
  line-height: 44px;
  letter-spacing: 0.02em;
`;
