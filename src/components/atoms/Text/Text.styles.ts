import styled from 'styled-components';
import { rgba } from 'polished';

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontMontserrat};
  font-weight: 600;
  font-size: 0.7rem;
  line-height: 0.85rem;
  margin-bottom: 0.2rem;
`;

export const MainSubTitle = styled.h3`
  color: ${({ theme }) => rgba(theme.accentColor, 0.9)};
  font-family: ${({ theme }) => theme.fontMontserrat};
  font-weight: bold;
  font-size: 0.32rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.25rem;
`;

export const BlockTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontOpenSans};
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.36rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontMontserrat};
  font-size: 0.28rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
`;

export const InfoTextLarge = styled(InfoText)`
  font-size: 0.28rem;
  line-height: 0.44rem;
`;

export const InfoTextMedium = styled(InfoText)`
  font-size: 0.28rem;
  line-height: 0.44rem;
`;
