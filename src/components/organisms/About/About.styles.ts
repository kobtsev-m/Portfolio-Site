import styled from 'styled-components';
import { InfoTextMedium } from 'components/atoms';
import { media } from 'styles/media';
import { CaretDarkIcon, CaretLightIcon } from 'assets';

export const AboutText = styled(InfoTextMedium)`
  width: 100%;
  ${media('lg', 'width: 90%')}
`;

export const TechnologiesList = styled.ul`
  list-style: none;
`;

interface TechnologiesListItemPropsType {
  opacity?: number;
}

const getListIcon = (themeName: string) => {
  return `url(${themeName === 'dark' ? CaretDarkIcon : CaretLightIcon})`;
};

export const TechnologiesListItem = styled.li<TechnologiesListItemPropsType>`
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
