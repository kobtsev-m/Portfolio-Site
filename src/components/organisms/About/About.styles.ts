import styled, { css } from 'styled-components';
import { media } from '~/styles';
import { CaretDarkIcon, CaretLightIcon } from '~/assets';

const NonBorderCss = css`
  width: 90%;
  text-align: left;
  border: none;
  border-radius: 0;
  padding: 0;
`;

const BorderCss = css`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.thin};
  border-radius: 10px;
  padding: 0.4rem;
`;

export const AboutText = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 0.28rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
  ${BorderCss}
  ${media('lg', NonBorderCss)};
`;

export const TechnologiesBlock = styled.div`
  ${BorderCss}
  ${media('lg', NonBorderCss)};
`;

export const TechnologiesList = styled.ul`
  list-style: none;
`;

interface TechnologiesListItemProps {
  opacity?: number;
}

const getListIcon = (themeName: string) => {
  return `url(${themeName === 'dark' ? CaretDarkIcon : CaretLightIcon})`;
};

export const TechnologiesListItem = styled.li<TechnologiesListItemProps>`
  position: relative;
  font-size: 0.24rem;
  margin: 0 0 0.3rem 0.4rem;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -0.4rem;
    transform: translateY(-50%);
    width: 0.2rem;
    height: 0.4rem;
    background: ${({ theme }) => getListIcon(theme.name)} center no-repeat;
    background-size: cover;
    opacity: ${({ opacity }) => `${opacity}%`};
  }
`;
