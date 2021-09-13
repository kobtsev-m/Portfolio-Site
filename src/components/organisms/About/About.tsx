import { Box, Container, Row, Column, CustomButton } from 'components/atoms';
import { BlockHeader } from 'components/molecules';
import {
  AboutText,
  TechnologiesList,
  TechnologiesListItem
} from './About.styles';

export const About = () => {
  return (
    <section>
      <Container mt='0.5rem' pb='20em'>
        <BlockHeader title='about' orient='left' />
        <Row mt='0.5rem'>
          <Column lg={8}>
            <AboutText>
              Hello, my name is Michael, I’m <b>20 years</b> old{' '}
              <b>Computer Science student</b> who is interested in creating web
              applications
              <br />
              <br />I have about <b>2 years experience</b> in which I managed
              to work on 2 commercial projects and over 10 demo projects
              <br />
              <br />
              At first I was practicing as a <b>
                Python Full-stack developer
              </b>{' '}
              and now decided to choose a narrower focus
              <br />
              <br />
              Main technologies I’ve been working with are shown on the right
            </AboutText>
          </Column>
          <Column lg={4} mt={{ xs: '0.5rem', lg: '0' }}>
            <CustomButton width={100} disabled={true}>
              TECHNOLOGIES
            </CustomButton>
            <Box mt='0.3rem'>
              <TechnologiesList>
                <TechnologiesListItem>JavaScript (ES6)</TechnologiesListItem>
                <TechnologiesListItem>TypeScript</TechnologiesListItem>
                <TechnologiesListItem>CSS, Sass</TechnologiesListItem>
                <TechnologiesListItem>React</TechnologiesListItem>
                <TechnologiesListItem>Bootstrap</TechnologiesListItem>
                <TechnologiesListItem>Git</TechnologiesListItem>
                <TechnologiesListItem opacity={40}>
                  Python 3
                </TechnologiesListItem>
                <TechnologiesListItem opacity={40}>
                  Django
                </TechnologiesListItem>
              </TechnologiesList>
            </Box>
          </Column>
        </Row>
      </Container>
    </section>
  );
};
