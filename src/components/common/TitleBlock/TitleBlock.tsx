import { Col, Row } from 'react-bootstrap';
import {
  TitleBlockLine,
  TitleBlockText,
  TitleBlockWrapper
} from './TitleBlock.styles';

interface PropsType {
  title: string;
  orient: 'right' | 'left';
  className?: string;
}

export default function TitleBlock(props: PropsType) {
  const { title, orient, className } = props;
  return (
    <Row className={className}>
      <Col md={5}>
        <TitleBlockWrapper align={orient}>
          <TitleBlockText>{title}</TitleBlockText>
          <TitleBlockText>{title}</TitleBlockText>
          <TitleBlockText>{title}</TitleBlockText>
        </TitleBlockWrapper>
      </Col>
      <Col md={{ span: 7, order: orient === 'right' ? 'first' : 'last' }}>
        <TitleBlockWrapper>
          <TitleBlockLine />
        </TitleBlockWrapper>
      </Col>
    </Row>
  );
}
