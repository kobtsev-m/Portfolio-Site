import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Spring } from 'react-spring';
import { Row, Column } from 'components/atoms';
import { Title, Line, Wrapper } from './BlockHeader.styles';

interface PropsType {
  title: string;
  orient: 'right' | 'left';
  className?: string;
}

export const BlockHeader = (props: PropsType) => {
  const [visible, setVisible] = useState(null);
  const { title, orient, className } = props;
  return (
    <Row className={className} reverse={orient === 'right'}>
      <Column lg={6} xl={5}>
        <Wrapper align={orient}>
          <Spring
            immediate={false}
            reset={true}
            from={{
              opacity: 0,
              transform: 'translateX(-300px)'
            }}
            to={{
              opacity: 1,
              transform: 'translateX(0)'
            }}
            reserve={!visible}
          >
            {(style) => <Title style={style as any}>{title}</Title>}
          </Spring>
          <Title>{title}</Title>
          <Title>{title}</Title>
        </Wrapper>
      </Column>
      <Column lg={6} xl={7} hideAt='lg'>
        <Wrapper>
          <Line
            onClick={() => {
              console.log('bro');
              setVisible(!visible);
            }}
          />
        </Wrapper>
      </Column>
    </Row>
  );
};
