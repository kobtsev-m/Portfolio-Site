import { Box, Container, Row, Column, ScrollButton } from 'components/atoms';
import {
  IntroWrapper,
  IntroTitle,
  IntroSubTitle,
  IntroDescription,
  IntroTextBlock
} from './Intro.styles';
import { IntroAvatar } from './IntroAvatar';

export const Intro = () => {
  return (
    <IntroWrapper>
      <Container height={100}>
        <Row height={100} mt={{ xs: '0.4rem', lg: '0' }}>
          <Column
            lg={6}
            xl={8}
            flex
            align='center'
            justify={{ xs: 'center', md: 'start' }}
          >
            <IntroTextBlock>
              <IntroTitle>Michael Kobtsev</IntroTitle>
              <IntroSubTitle>
                React Front-end developer in search of interesting projects and
                proposals
              </IntroSubTitle>
              <IntroDescription>
                I specialize on creating user interfaces & developing rich web
                applications. I have experience working with big international
                company & creating many demo projects in this area.
              </IntroDescription>
            </IntroTextBlock>
          </Column>
          <Column
            lg={6}
            xl={4}
            flex
            align='center'
            justify={{ xs: 'center', lg: 'end' }}
            mt={{ xs: '2.5em', lg: '0' }}
          >
            <IntroAvatar />
          </Column>
        </Row>
      </Container>
      <Box position='absolute' right='50%' bottom='20px' hideAt='xl'>
        <ScrollButton />
      </Box>
    </IntroWrapper>
  );
};
