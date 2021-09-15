import { FC } from 'react';
import { Row } from 'components/atoms';
import { CommercialCard } from 'components/molecules';
import {
  AmdbIcon,
  AmdbPreviewImg,
  IntegralIcon,
  IntegralPreviewImg
} from 'assets';

export const ProjectsCommercial: FC = () => {
  return (
    <Row mt='0.5rem'>
      <CommercialCard
        cardId={1}
        companyName='Integral Commodities'
        companyIcon={IntegralIcon}
        position='Front-end developer'
        description='Commercial web site for one of the largest exporters company of Polymers, Fertilisers & Sulphur'
        technologies={['Next.js', 'Google Maps API', 'Bootstrap 5']}
        previewImg={IntegralPreviewImg}
        siteLink='https://integral-commodities.ch/'
      />
      <CommercialCard
        cardId={2}
        companyName='AMDB'
        companyIcon={AmdbIcon}
        position='Full-stack developer'
        description='Site for Institute of Biology for storage, editing, searching and analysis researches and experiments'
        technologies={['Django', 'Bootstrap 4', 'JavaScript', 'Plotly.js']}
        previewImg={AmdbPreviewImg}
        siteLink='https://amdb.online/'
      />
    </Row>
  );
};
