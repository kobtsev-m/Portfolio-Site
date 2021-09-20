import { FC } from 'react';
import { About, Contact, Intro, Projects } from 'components/organisms';

export const Home: FC = () => {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
