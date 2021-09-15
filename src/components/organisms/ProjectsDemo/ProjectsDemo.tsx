import { FC } from 'react';
import { Row, Column } from 'components/atoms';
import { DemoCard } from 'components/molecules';
import { DemoTitle } from './ProjectsDemo.styles';

const demoCards = [
  {
    projectName: 'Blog site',
    description:
      'Example of simple blog site with the division of posts into categories',
    technologies: ['React', 'Django', 'Bootstrap'],
    githubLink: 'https://github.com/kobtsev-m/Rest-Api-Blog/',
    demoLink: 'https://kobtsev-m.github.io/Rest-Api-Blog'
  },
  {
    projectName: 'Polygonal animations',
    description:
      'Generating animation of polygonal svg images with triangulation algorithm',
    technologies: ['Anime.js', 'Django'],
    githubLink: 'https://github.com/kobtsev-m/Polygonal-Svg',
    demoLink: 'https://pure-oasis-09000.herokuapp.com/'
  },
  {
    projectName: 'Car Searcher',
    description: 'Filter search example with cars models',
    technologies: ['React', 'Django'],
    githubLink: 'https://github.com/relax-man/Car-Searcher',
    demoLink: 'https://relax-man.github.io/Car-Searcher'
  },
  {
    projectName: 'Django OAuth',
    description:
      'Example of OAuth in Django with user profile and settings pages',
    technologies: ['Django', 'AllAuth'],
    githubLink: 'https://github.com/kobtsev-m/Django-Auth',
    demoLink: 'https://warm-beyond-18141.herokuapp.com/'
  },
  {
    projectName: 'Animal Shelter',
    description: 'Site of animal shelter with animals cards and search menu',
    technologies: ['Django', 'AWS', 'Bootstrap'],
    githubLink: 'https://github.com/kobtsev-m/Animal-Shelter',
    demoLink: 'https://frozen-springs-02490.herokuapp.com/'
  },
  {
    projectName: 'Waxom',
    description: 'Adaptive layout of landing page',
    technologies: ['Sass', 'Bootstrap'],
    githubLink: 'https://github.com/kobtsev-m/Waxom',
    demoLink: 'https://kobtsev-m.github.io/Waxom'
  }
];

export const ProjectsDemo: FC = () => {
  return (
    <>
      <Row mt='0.5rem' align='center'>
        <Column lg={4} hideAt='lg'>
          <hr />
        </Column>
        <Column lg={4} flex justify='center'>
          <DemoTitle>other projects</DemoTitle>
        </Column>
        <Column lg={4} hideAt='lg'>
          <hr />
        </Column>
      </Row>
      <Row mt='1rem'>
        {demoCards.map((card, i) => (
          <Column key={i} md={6} xl={4} gutter='0.3rem' mb='0.3rem'>
            <DemoCard {...card} />
          </Column>
        ))}
      </Row>
    </>
  );
};
