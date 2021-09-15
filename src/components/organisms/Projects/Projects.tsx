import { FC, useState } from 'react';
import { animated, config, useTransition } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import { useContainerOffset } from 'hooks/useContainerOffset';
import { Box, Container } from 'components/atoms';
import { BlockHeader } from 'components/molecules';
import { ProjectsCommercial, ProjectsDemo } from 'components/organisms';
import { InscriptionTitle } from './Projects.styles';

const AnimatedBox = animated(Box);

export const Projects: FC = () => {
  const [isCommercialVisible, setIsCommercialVisible] = useState(false);
  const [isDemoVisible, setIsDemoVisible] = useState(false);
  const { containerOffset, containerRef } = useContainerOffset();

  const isInscriptionVisible = containerOffset >= 140;

  const inscriptionAnimation = useTransition(
    isCommercialVisible || isDemoVisible,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reset: isCommercialVisible || isDemoVisible,
      config: config.slow
    }
  );

  return (
    <section>
      <Container ref={containerRef} mt='0.5rem'>
        <BlockHeader title='projects' orient='right' />
        <VisibilitySensor
          partialVisibility={true}
          minTopValue={150}
          onChange={(v) => isInscriptionVisible && setIsCommercialVisible(v)}
        >
          <ProjectsCommercial />
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          minTopValue={300}
          onChange={(v) => isInscriptionVisible && setIsDemoVisible(v)}
        >
          <ProjectsDemo />
        </VisibilitySensor>
      </Container>
      {isInscriptionVisible &&
        inscriptionAnimation(
          (styles, item) =>
            item && (
              <AnimatedBox
                position='fixed'
                top='50%'
                right={`${containerOffset / 2}px`}
                style={styles}
              >
                <InscriptionTitle>
                  {isDemoVisible ? 'demo' : 'commercial'}
                </InscriptionTitle>
              </AnimatedBox>
            )
        )}
    </section>
  );
};
