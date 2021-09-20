import styled, { css } from 'styled-components';
import { media } from '~/styles';
import { rgba } from 'polished';

const NonBorderCss = css`
  max-width: 80%;
  text-align: left;
  border: none;
  border-radius: 0;
  padding: 0;
`;

const BorderCss = css`
  border: 1px solid ${({ theme }) => theme.color.thin};
  border-radius: 10px;
  padding: 0.4rem;
`;

export const IntroWrapper = styled.section`
  height: auto;
  ${media('lg', 'height: calc(100vh - 140px - 0.2rem)')};
`;

export const IntroTextBlock = styled.div`
  width: 100%;
  ${BorderCss}
  ${media('lg', NonBorderCss)};
`;

export const IntroAvatarBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${BorderCss}
  ${media('lg', NonBorderCss)};
`;

export const IntroTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.montserrat};
  font-weight: 600;
  font-size: 0.7rem;
  line-height: 0.85rem;
  margin-bottom: 0.2rem;
`;

export const IntroSubTitle = styled.h2`
  color: ${({ theme }) => rgba(theme.color.accent, 0.9)};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-weight: bold;
  font-size: 0.32rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.25rem;
`;

export const IntroDescription = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 0.28rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
`;

export const AvatarSvg = styled.svg`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  ${media('lg', 'height: 550px')}
`;

export const AvatarJpg = styled.div<{ src: string }>`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  ${media('lg', 'height: 550px')};
`;
