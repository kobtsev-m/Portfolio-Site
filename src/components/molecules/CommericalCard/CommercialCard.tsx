import { FC } from 'react';
import { Row, Column } from 'components/atoms';
import {
  Wrapper,
  Title,
  SubTitle,
  InfoText,
  PreviewImage,
  TechnologiesList,
  TechnologiesListItem
} from './CommercialCard.styles';

interface PropsType {
  companyName?: string;
  companyIcon?: string;
  position?: string;
  description?: string;
  technologies?: string[];
  previewImg?: string;
}

export const CommercialCard: FC<PropsType> = (props) => {
  const {
    companyName,
    companyIcon,
    position,
    description,
    technologies,
    previewImg
  } = props;
  return (
    <Wrapper p='0.5rem' mb='0.5rem'>
      <Row>
        <Column lg={6}>
          <Title icon={companyIcon}>{companyName}</Title>
          <SubTitle>{position}</SubTitle>
          <InfoText>{description}</InfoText>
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
        <Column
          lg={6}
          height={100}
          p={{ xs: '0.2rem 0 0 0', lg: '0 0 0 0.4rem' }}
        >
          <PreviewImage src={previewImg} />
        </Column>
      </Row>
    </Wrapper>
  );
};
