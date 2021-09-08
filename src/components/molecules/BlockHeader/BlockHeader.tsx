import { Col, Row } from 'react-bootstrap';
import { Title, Line, Wrapper } from './BlockHeader.style';

interface PropsType {
  title: string;
  orient: 'right' | 'left';
  className?: string;
}

export const BlockHeader = (props: PropsType) => {
  const { title, orient, className } = props;
  return (
    <Row className={className}>
      <Col md={5}>
        <Wrapper align={orient}>
          <Title>{title}</Title>
          <Title>{title}</Title>
          <Title>{title}</Title>
        </Wrapper>
      </Col>
      <Col md={{ span: 7, order: orient === 'right' ? 'first' : 'last' }}>
        <Wrapper>
          <Line />
        </Wrapper>
      </Col>
    </Row>
  );
};
