import styled from 'styled-components';
import { media } from 'styles/media';

export const IntroWrapper = styled.section`
  height: auto;
  ${media('xl', 'height: calc(100vh - 140px - 0.2rem)')};
`;

export const IntroTextBlock = styled.div`
  max-width: 100%;
  text-align: center;
  ${media('lg', 'max-width: 80%; text-align: left')};
`;

export const AvatarSvg = styled.svg`
  width: 100%;
  height: 400px;
  ${media('lg', 'height: 550px')}
`;
