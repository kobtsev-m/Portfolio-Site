import styled from 'styled-components';
import { rgba } from 'polished';

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.montserrat};
  font-weight: 600;
  font-size: 0.7rem;
  line-height: 0.85rem;
  margin-bottom: 0.2rem;
`;

export const MainSubTitle = styled.h3`
  color: ${({ theme }) => rgba(theme.color.accent, 0.9)};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-weight: bold;
  font-size: 0.32rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.25rem;
`;

export const BlockTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.openSans};
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.36rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 0.28rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.openSans};
  font-style: normal;
  font-weight: 300;
  font-size: 0.4rem;
  line-height: 0.54rem;
`;

export const CardSubTitle = styled.h3`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.openSans};
  font-style: normal;
  font-weight: normal;
  font-size: 0.4rem;
  line-height: 0.54rem;
`;

export const CardInfoText = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-style: normal;
  font-weight: 300;
  font-size: 0.28rem;
  line-height: 0.37rem;
`;
