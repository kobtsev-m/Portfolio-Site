import styled from 'styled-components';
import { rgba } from 'polished';

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontMontserrat};
  font-weight: 600;
  font-size: 70px;
  line-height: 85px;
  margin: 3rem 0 1.8rem;
`;

export const MainSubTitle = styled.h3`
  color: ${({ theme }) => rgba(theme.accentColor, 0.9)};
  font-family: ${({ theme }) => theme.fontMontserrat};
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.02em;
  margin-bottom: 1.8rem;
`;

export const BlockTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontOpenSans};
  font-weight: 800;
  font-size: 100px;
  line-height: 136px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontMontserrat};
  font-size: 28px;
  line-height: 44px;
  letter-spacing: 0.02em;
`;

export const InfoTextLarge = styled(InfoText)`
  font-size: 28px;
  line-height: 44px;
`;

export const InfoTextMedium = styled(InfoText)`
  font-size: 28px;
  line-height: 34px;
`;
