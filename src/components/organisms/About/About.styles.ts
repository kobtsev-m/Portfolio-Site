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

export const TechnologiesListItem = styled.li<TechnologiesListItemPropsType>`
  position: relative;
  font-size: 0.24rem;
  margin: 0 0 0.3rem 0.3rem;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -0.3rem;
    transform: translateY(-50%);
    width: 0.2rem;
    height: 0.4rem;
    background-image: ${({ theme }) =>
      `url(${theme.name === 'dark' ? CaretDarkIcon : CaretLightIcon})`};
    opacity: ${({ opacity }) => `${opacity}%`};
  }
`;
