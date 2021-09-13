import { Container, Row } from 'components/atoms';
import { BlockHeader, CommercialCard } from 'components/molecules';
import {
  IntegralIcon,
  AmdbIcon,
  IntegralPreviewImg,
  AmdbPreviewImg
} from 'assets';

export const Projects = () => {
  return (
    <section>
      <Container mt='0.5rem' pb='20em'>
        <BlockHeader title='projects' orient='right' />
        <Row mt='0.5rem'>
          <CommercialCard
            companyName='Integral Commodities'
            companyIcon={IntegralIcon}
            position='Front-end developer'
            description='Commercial web site for one of the largest exporters company of Polymers, Fertilisers & Sulphur'
            technologies={['Next.js', 'Google Maps API', 'Bootstrap 5']}
            previewImg={IntegralPreviewImg}
          />
          <CommercialCard
            companyName='AMDB'
            companyIcon={AmdbIcon}
            position='Full-stack developer'
            description='Site for Institute of Biology for storage, editing, searching and analysis researches and experiments'
            technologies={['Django', 'Bootstrap 4', 'JavaScript', 'Plotly.js']}
            previewImg={AmdbPreviewImg}
          />
        </Row>
      </Container>
    </section>
  );
};
