import styled from 'styled-components';
import { rgba } from 'polished';
import { Box, CardInfoText, CardSubTitle, CardTitle } from 'components/atoms';
import { media } from 'styles/media';

export const Wrapper = styled(Box)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.layout};
`;

export const Title = styled(CardTitle)<{ icon?: string }>`
  position: relative;
  padding: 0.25rem 0;
  margin-left: 1.3rem;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -1.3rem;
    transform: translateY(-50%);
    width: 1rem;
    height: 100%;
    background: ${({ icon }) => `url(${icon}) center no-repeat`};
    background-size: 100% auto;
  }
`;

export const SubTitle = styled(CardSubTitle)`
  margin: 0.2rem 0;
`;

export const InfoText = styled(CardInfoText)`
  margin-bottom: 0.2rem;
`;

export const PreviewImage = styled.div<{ src?: string }>`
  width: 100%;
  height: 4rem;
  background-image: ${({ src }) => `url(${src})`};
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 95% auto;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

export const TechnologiesList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  ${media('lg', 'flex-direction: row')}
`;

export const TechnologiesListItem = styled.li`
  color: ${({ theme }) => rgba(theme.color.accent, 0.7)};
  margin: 0 0 0.2rem 0;
  ${media('lg', 'margin: 0 0.2rem 0 0')}
`;
