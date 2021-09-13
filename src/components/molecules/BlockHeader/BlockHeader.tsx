import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Transition, animated, config } from 'react-spring';
import { Row, Column } from 'components/atoms';
import { Title, Line, Wrapper } from './BlockHeader.styles';

interface PropsType {
  title: string;
  orient: 'right' | 'left';
  className?: string;
}

const AnimatedTitle = animated(Title);

export const BlockHeader = (props: PropsType) => {
  const { title, orient, className } = props;
  const translateFrom = `${orient === 'right' ? '' : '-'}200px`;
  return (
    <Row className={className} reverse={orient === 'right'}>
      <Column lg={6}>
        <VisibilitySensor partialVisibility={true} minTopValue={50}>
          {({ isVisible }) => (
            <Wrapper align={orient}>
              {[...Array(3)].map((_, i) => (
                <Transition
                  key={i}
                  items={isVisible}
                  reverse={isVisible}
                  delay={i * 150}
                  from={{
                    opacity: 0,
                    transform: `translateX(${translateFrom})`
                  }}
                  enter={{
                    opacity: 1,
                    transform: 'translateX(0)',
                    config: config.slow
                  }}
                  leave={{
                    opacity: 0,
                    transform: `translateX(${translateFrom})`,
                    config: { duration: 0 }
                  }}
                >
                  {(styles, item) =>
                    item && (
                      <AnimatedTitle style={styles}>{title}</AnimatedTitle>
                    )
                  }
                </Transition>
              ))}
            </Wrapper>
          )}
        </VisibilitySensor>
      </Column>
      <Column lg={6} hideAt='lg'>
        <Wrapper>
          <Line />
        </Wrapper>
      </Column>
    </Row>
  );
};
