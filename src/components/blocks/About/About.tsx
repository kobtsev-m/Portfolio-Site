import { Col, Container, Row } from 'react-bootstrap';
import { CustomButton } from 'components/common/Buttons/Buttons';
import TitleBlock from 'components/common/TitleBlock/TitleBlock';

export default function About() {
  return (
    <Container>
      <TitleBlock title='about' orient='left' className='mt-5' />
      <Row>
        <Col md={8}>
          <p>
            Hello, my name is Michael, I’m <b>20 years</b> old{' '}
            <b>Computer Science student</b> who is interested in creating web
            applications
            <br />
            <br />I have about <b>2 years experience</b> in which I managed to
            work on 2 commercial projects and over 10 demo projects
            <br />
            <br />
            At first I was practicing as a <b>Python Full-stack developer</b>
            and now decided to choose a narrower focus
            <br />
            <br />
            Main technologies I’ve been working with are shown on the right
          </p>
        </Col>
        <Col md={4}>
          <CustomButton className='w-100' disabled={true}>
            TECHNOLOGIES
          </CustomButton>
          <ul>
            <li>JavaScript (ES6)</li>
            <li>CSS, Sass</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Git</li>
            <li>Bootstrap</li>
            <li>Python 3</li>
            <li>Django</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
