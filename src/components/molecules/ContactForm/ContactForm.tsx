import { FC, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  CustomInput,
  CustomTextarea,
  CustomButton
} from 'components/atoms';

export const ContactForm: FC = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <Box>
        <CustomInput name='name' placeholder={t('contact.name')} />
      </Box>
      <Box mt='0.3rem'>
        <CustomInput name='email' placeholder={t('contact.email')} />
      </Box>
      <Box mt='0.3rem'>
        <CustomTextarea
          name='message'
          placeholder={t('contact.message')}
          rows={4}
        />
      </Box>
      <Box mt='0.5rem' mb='0.2rem'>
        <CustomButton width={100} color='font' size='sm'>
          {t('contact.send')}
        </CustomButton>
      </Box>
    </form>
  );
};
