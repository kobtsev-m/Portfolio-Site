import { FC } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Row,
  Column,
  ScrollButton,
  HR
} from '~/components/atoms';
import { IntroAvatar } from './IntroAvatar';
import {
  IntroWrapper,
  IntroTitle,
  IntroSubTitle,
  IntroDescription,
  IntroTextBlock,
  IntroAvatarBlock
} from './Intro.styles';

export const Intro: FC = () => {
  const { t } = useTranslation();
  return (
    <IntroWrapper>
      <Container height={100}>
        <Row height={100} mt={{ xs: '0.3rem', lg: '0' }}>
          <Column
            lg={12}
            xl={16}
            flex
            align='center'
            justify={{ xs: 'center', md: 'start' }}
          >
            <IntroTextBlock>
              <IntroTitle>{t('intro.title')}</IntroTitle>
              <IntroSubTitle>{t('intro.subtitle')}</IntroSubTitle>
              <IntroDescription>{t('intro.description')}</IntroDescription>
            </IntroTextBlock>
          </Column>
          <Column
            lg={12}
            xl={8}
            flex
            align='center'
            justify={{ xs: 'center', lg: 'end' }}
            mt={{ xs: '2.5em', lg: '0' }}
          >
            <IntroAvatarBlock>
              <IntroAvatar />
            </IntroAvatarBlock>
          </Column>
        </Row>
      </Container>
      <Box position='absolute' right='50%' bottom='20px' hideAt='xl'>
        <Link to='about' offset={-100} smooth={true}>
          <ScrollButton />
        </Link>
      </Box>
    </IntroWrapper>
  );
};
