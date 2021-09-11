import React, { useState, useCallback } from 'react';
import { useSpring, animated, SpringValue } from 'react-spring';
import { Row, Column } from 'components/atoms';
import { Title, Line, Wrapper } from './BlockHeader.styles';

interface TextPropsType {
  children?: React.ReactNode;
  offset?: SpringValue<number>;
  pos?: number;
  start?: number;
  end?: number;
}

function Text(props: TextPropsType) {
  const { children, offset, pos, start, end } = props;
  return (
    <Title>
      <animated.div>{children}</animated.div>
    </Title>
  );
}

interface PropsType {
  title: string;
  orient: 'right' | 'left';
  className?: string;
}

export const BlockHeader = (props: PropsType) => {
  const { title, orient, className } = props;
  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }));
  const handleScroll = (e: React.WheelEventHandler<HTMLDivElement>) => {
    console.log(e.currentTarget.scrollTop);
  };
  // const handleScroll = useCallback(
  //   (e) => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }),
  //   [set]
  // );
  return (
    <Row
      className={className}
      reverse={orient === 'right'}
      onScroll={handleScroll}
    >
      <Column lg={6} xl={5}>
        <Wrapper align={orient}>
          <Text offset={scroll} pos={0} start={0} end={0.5}>
            {title}
          </Text>
          <Text offset={scroll} pos={0} start={0} end={0.5}>
            {title}
          </Text>
          <Text offset={scroll} pos={0} start={0} end={0.5}>
            {title}
          </Text>
        </Wrapper>
      </Column>
      <Column lg={6} xl={7} hideAt='lg'>
        <Wrapper>
          <Line />
        </Wrapper>
      </Column>
    </Row>
  );
};
