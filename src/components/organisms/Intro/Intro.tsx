import { Col, Container, Row } from 'react-bootstrap';
import {
  ScrollButton,
  AbsoluteElement,
  MainTitle,
  MainSubTitle,
  InfoTextLarge
} from 'components/atoms';
import { IntroWrapper } from './Intro.styles';
import { IntroAvatar } from './IntroAvatar';

export const Intro = () => {
  return (
    <IntroWrapper>
      <Container className='h-100'>
        <Row className='h-100'>
          <Col lg={6} xl={8} className='d-flex align-center'>
            <div>
              <MainTitle>Michael Kobtsev</MainTitle>
              <MainSubTitle>
                React Front-end developer in search <br />
                of interesting projects and proposals
              </MainSubTitle>
              <InfoTextLarge>
                I specialize on creating user interfaces & <br />
                developing rich web applications. I have <br />
                experience working with big international <br />
                company & creating many demo projects <br />
                in this area.
              </InfoTextLarge>
            </div>
          </Col>
          <Col lg={6} xl={4} className='d-flex align-center'>
            <IntroAvatar />
          </Col>
        </Row>
      </Container>
      <AbsoluteElement right='50%' bottom='20px'>
        <ScrollButton className='d-none d-xl-block' />
      </AbsoluteElement>
    </IntroWrapper>
  );
};
