import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CommercialCard } from '~/components/molecules';
import { Row } from '~/components/atoms';
import {
  AmdbIcon,
  AmdbPreviewImg,
  IntegralIcon,
  IntegralPreviewImg
} from '~/assets';

export const ProjectsCommercial: FC = () => {
  const { t } = useTranslation();
  return (
    <Row mt='0.5rem'>
      <CommercialCard
        cardId={1}
        companyName={t('projects.ic.companyName')}
        companyIcon={IntegralIcon}
        position={t('projects.ic.position')}
        description={t('projects.ic.description')}
        technologies={['Next.js', 'Google Maps API', 'Bootstrap 5']}
        previewImg={IntegralPreviewImg}
        siteLink='https://integral-commodities.ch/'
      />
      <CommercialCard
        cardId={2}
        companyName={t('projects.amdb.companyName')}
        companyIcon={AmdbIcon}
        position={t('projects.amdb.position')}
        description={t('projects.amdb.description')}
        technologies={['Django', 'Bootstrap 4', 'JavaScript', 'Plotly.js']}
        previewImg={AmdbPreviewImg}
        siteLink='https://amdb.online/'
      />
    </Row>
  );
};
