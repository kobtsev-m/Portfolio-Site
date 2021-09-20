import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Row, Column } from '~/components/atoms';
import {
  Wrapper,
  OverflowLink,
  CardTitle,
  CardSubTitle,
  CardDescription,
  PreviewImage,
  TechnologiesList,
  TechnologiesListItem
} from './CommercialCard.styles';

interface CommercialCardProps {
  cardId: number;
  companyName?: string;
  companyIcon?: string;
  position?: string;
  description?: string;
  technologies?: string[];
  previewImg?: string;
  siteLink: string;
}

export const CommercialCard: FC<CommercialCardProps> = (props) => {
  const {
    companyName,
    companyIcon,
    position,
    description,
    technologies,
    previewImg,
    siteLink
  } = props;

  const { t } = useTranslation();

  return (
    <Wrapper mb='0.5rem'>
      <Row>
        <Column lg={12} p={{ xs: '0.5rem 0.5rem 0 0.5rem', lg: '0.5rem' }}>
          <CardTitle icon={companyIcon}>{companyName}</CardTitle>
          <CardSubTitle>{position}</CardSubTitle>
          <CardDescription>{description}</CardDescription>
          <Box hideAt='lg'>
            {technologies && (
              <TechnologiesList>
                {technologies?.map((technology, i) => (
                  <TechnologiesListItem key={i}>
                    {technology}
                  </TechnologiesListItem>
                ))}
              </TechnologiesList>
            )}
          </Box>
        </Column>
        <Column lg={12} position='relative' height={100} p='0.5rem'>
          <PreviewImage src={previewImg} />
          <Box position='absolute' top='0' left='0' width={100} height={100}>
            <OverflowLink href={siteLink} target='_blank' rel='noreferrer'>
              {t('projects.webSite')}
            </OverflowLink>
            <OverflowLink href='/'>{t('projects.readMore')}</OverflowLink>
          </Box>
        </Column>
      </Row>
    </Wrapper>
  );
};
