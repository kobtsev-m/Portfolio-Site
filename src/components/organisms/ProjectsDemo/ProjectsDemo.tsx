import { FC } from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import { Row, Column } from '~/components/atoms';
import { DemoCard } from '~/components/molecules';
import { DemoTitle } from './ProjectsDemo.styles';

const demoCards = (t: TFunction) => [
  {
    projectName: 'Blog site',
    description: t('projects.blogSite.description'),
    technologies: ['React', 'Django', 'Bootstrap'],
    githubLink: 'https://github.com/kobtsev-m/Rest-Api-Blog/',
    demoLink: 'https://kobtsev-m.github.io/Rest-Api-Blog'
  },
  {
    projectName: 'Polygonal animations',
    description: t('projects.polygonalAnimations.description'),
    technologies: ['Anime.js', 'Django'],
    githubLink: 'https://github.com/kobtsev-m/Polygonal-Svg',
    demoLink: 'https://pure-oasis-09000.herokuapp.com/'
  },
  {
    projectName: 'Animal Shelter',
    description: t('projects.animalShelter.description'),
    technologies: ['Django', 'AWS', 'Bootstrap'],
    githubLink: 'https://github.com/kobtsev-m/Animal-Shelter',
    demoLink: 'https://frozen-springs-02490.herokuapp.com/'
  },
  {
    projectName: 'Django OAuth',
    description: t('projects.djangoOAuth.description'),
    technologies: ['Django', 'AllAuth'],
    githubLink: 'https://github.com/kobtsev-m/Django-Auth',
    demoLink: 'https://warm-beyond-18141.herokuapp.com/accounts/login/'
  },
  {
    projectName: 'Car Searcher',
    description: t('projects.carSearcher.description'),
    technologies: ['React', 'Django'],
    githubLink: 'https://github.com/relax-man/Car-Searcher',
    demoLink: 'https://relax-man.github.io/Car-Searcher'
  },
  {
    projectName: 'Waxom',
    description: t('projects.waxom.description'),
    technologies: ['Sass', 'Bootstrap'],
    githubLink: 'https://github.com/kobtsev-m/Waxom',
    demoLink: 'https://kobtsev-m.github.io/Waxom'
  }
];

export const ProjectsDemo: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Row mt='0.5rem' align='center'>
        <Column xs={3} sm={4} lg={8}>
          <hr />
        </Column>
        <Column xs={18} sm={16} lg={8} flex justify='center'>
          <DemoTitle>{t('projects.otherProjects')}</DemoTitle>
        </Column>
        <Column xs={3} sm={4} lg={8}>
          <hr />
        </Column>
      </Row>
      <Row mt='1rem'>
        {demoCards(t).map((card, i) => (
          <Column key={i} md={12} xl={8} gutter='0.3rem' mb='0.3rem'>
            <DemoCard {...card} />
          </Column>
        ))}
      </Row>
    </>
  );
};
