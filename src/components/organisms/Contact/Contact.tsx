import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import { Column, Container, Row, HR } from '~/components/atoms';
import {
  BlockHeader,
  ContactForm,
  ContactLinks
} from '~/components/molecules';
import {
  Card,
  CardBody,
  CardDot,
  CardHeader,
  CardSeparator,
  CardSeparatorText
} from './Contact.styles';

export const Contact: FC = () => {
  const { t } = useTranslation();
  return (
    <Element name='contact'>
      <Container mt='0.5rem' mb='1.8rem'>
        <BlockHeader title={t('nav.contact')} orient='left' />
        <Row mt='0.5rem' justify='center'>
          <Column lg={18}>
            <Card>
              <CardHeader>
                <CardDot />
                <CardDot />
                <CardDot />
              </CardHeader>
              <CardBody>
                <Row>
                  <Column md={11} p='0.5rem'>
                    <ContactForm />
                  </Column>
                  <Column md={2} hideAt='md'>
                    <CardSeparator />
                    <CardSeparator />
                    <CardSeparatorText>{t('contact.or')}</CardSeparatorText>
                  </Column>
                  <Column md={2} pl='0.5rem' pr='0.5rem' showAt='md'>
                    <HR color='thin' height='1px' />
                  </Column>
                  <Column md={11} p='0.5rem'>
                    <ContactLinks />
                  </Column>
                </Row>
              </CardBody>
            </Card>
          </Column>
        </Row>
      </Container>
    </Element>
  );
};
