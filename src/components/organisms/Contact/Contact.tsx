import { FC } from 'react';
import { Container } from 'components/atoms';
import { BlockHeader } from 'components/molecules';

export const Contact: FC = () => {
  return (
    <section>
      <Container mt='0.5rem' pb='6rem'>
        <BlockHeader title='contact' orient='left' />
      </Container>
    </section>
  );
};
