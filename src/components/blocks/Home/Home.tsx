import { Col, Container, Row } from 'react-bootstrap';
import { HomeTitle, HomeSubTitle, InfoText } from 'styles/fonts';
import { ScrollButton } from 'styles/common/buttons';
import { AbsoluteElement } from 'styles/common/position';
import { HomeWrapper } from './Home.styles';
import HomeAvatar from './HomeAvatar';

export default function Home() {
  return (
    <HomeWrapper>
      <Container className='h-100'>
        <Row className='h-100'>
          <Col lg={6} xl={8} className='d-flex align-center'>
            <div>
              <HomeTitle>Michael Kobtsev</HomeTitle>
              <HomeSubTitle>
                React Front-end developer in search <br />
                of interesting projects and proposals
              </HomeSubTitle>
              <InfoText>
                I specialize on creating user interfaces & <br />
                developing rich web applications. I have <br />
                experience working with big international <br />
                company & creating many demo projects <br />
                in this area.
              </InfoText>
            </div>
          </Col>
          <Col lg={6} xl={4} className='d-flex align-center'>
            <HomeAvatar />
          </Col>
        </Row>
      </Container>
      <AbsoluteElement right='50%' bottom='20px'>
        <ScrollButton />
      </AbsoluteElement>
    </HomeWrapper>
  );
}
