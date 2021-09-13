import VisibilitySensor from 'react-visibility-sensor';
import { Transition, animated, config } from 'react-spring';
import { Box, Container, Row, Column, CustomButton } from 'components/atoms';
import { BlockHeader } from 'components/molecules';
import {
  AboutText,
  TechnologiesList,
  TechnologiesListItem
} from './About.styles';
import { useState } from 'react';

const technologies = [
  { name: 'JavaScript (ES6)', importance: 1 },
  { name: 'TypeScript', importance: 1 },
  { name: 'CSS, Sass', importance: 1 },
  { name: 'React', importance: 1 },
  { name: 'Bootstrap', importance: 1 },
  { name: 'Git', importance: 1 },
  { name: 'Python 3', importance: 0.4 },
  { name: 'Django', importance: 0.4 }
];

const AnimatedTechnologiesListItem = animated(TechnologiesListItem);

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section>
      <Container mt='0.5rem'>
        <BlockHeader title='about' orient='left' />
        <Row mt={{ xs: '0.2rem', lg: '0.5rem' }}>
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
            <VisibilitySensor
              partialVisibility={true}
              minTopValue={200}
              onChange={(v) => (v ? setIsVisible(true) : {})}
            >
              <>
                <CustomButton width={100} disabled={true}>
                  TECHNOLOGIES
                </CustomButton>
                <Box mt='0.3rem'>
                  <TechnologiesList>
                    {technologies.map((technology, i) => (
                      <Transition
                        key={i}
                        items={isVisible}
                        delay={i * 150}
                        from={{
                          opacity: 0,
                          transform: 'translateY(50px)'
                        }}
                        enter={{
                          opacity: technology.importance,
                          transform: 'translateY(0)',
                          config: config.gentle
                        }}
                        leave={{
                          opacity: 0,
                          transform: 'translateY(50px)',
                          config: { duration: 0 }
                        }}
                      >
                        {(styles, item) =>
                          item && (
                            <AnimatedTechnologiesListItem style={styles}>
                              {technology.name}
                            </AnimatedTechnologiesListItem>
                          )
                        }
                      </Transition>
                    ))}
                  </TechnologiesList>
                </Box>
              </>
            </VisibilitySensor>
          </Column>
        </Row>
      </Container>
    </section>
  );
};
