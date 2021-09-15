import { FC } from 'react';
import { Box, Row, Column } from 'components/atoms';
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

interface Props {
  cardId: number;
  companyName?: string;
  companyIcon?: string;
  position?: string;
  description?: string;
  technologies?: string[];
  previewImg?: string;
  siteLink: string;
}

export const CommercialCard: FC<Props> = (props) => {
  const {
    companyName,
    companyIcon,
    position,
    description,
    technologies,
    previewImg,
    siteLink
  } = props;
  return (
    <Wrapper mb='0.5rem'>
      <Row>
        <Column lg={6} p={{ xs: '0.5rem 0.5rem 0 0.5rem', lg: '0.5rem' }}>
          <CardTitle icon={companyIcon}>{companyName}</CardTitle>
          <CardSubTitle>{position}</CardSubTitle>
          <CardDescription>{description}</CardDescription>
          {technologies && (
            <TechnologiesList>
              {technologies?.map((technology, i) => (
                <TechnologiesListItem key={i}>
                  {technology}
                </TechnologiesListItem>
              ))}
            </TechnologiesList>
          )}
        </Column>
        <Column position='relative' lg={6} height={100} p='0.5rem'>
          <PreviewImage src={previewImg} />
          <Box position='absolute' top='0' left='0' width={100} height={100}>
            <OverflowLink href={siteLink} target='_blank' rel='noreferrer'>
              Web Site
            </OverflowLink>
            <OverflowLink href='/'>Read More</OverflowLink>
          </Box>
        </Column>
      </Row>
    </Wrapper>
  );
};
