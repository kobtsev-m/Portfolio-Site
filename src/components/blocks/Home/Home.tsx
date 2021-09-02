import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HomeTitle, HomeSubTitle, InfoText } from 'styles/common/fonts';
import { CustomImage } from 'styles/common/images';
import { HomeWrapper } from './Home.styles';

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
            <CustomImage
              src='/img/home/photo1.svg'
              width='100%'
              height='600px'
            />
          </Col>
        </Row>
      </Container>
    </HomeWrapper>
  );
}
