import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { Box, CustomInput, SubmitButton } from '~/components/atoms';

const contactSchema = yup.object().shape({
  name: yup.string().required('required'),
  email: yup.string().email('format').required('required'),
  message: yup.string().required('required')
});

export const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(contactSchema)
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem('isContactSubmitted')) {
      setIsSubmitted(true);
    }
  }, []);

  const onSubmit = handleSubmit((formData) => {
    const {
      REACT_APP_EMAILJS_SERVICE_ID: serviceId,
      REACT_APP_EMAILJS_TEMPLATE_ID: templateId,
      REACT_APP_EMAILJS_USER_ID: userId
    } = process.env;
    if (!serviceId || !templateId || !userId) {
      return;
    }
    setIsLoading(true);
    emailjs.send(serviceId, templateId, formData, userId).then(
      () => {
        reset();
        localStorage.setItem('isContactSubmitted', 'true');
        setIsLoading(false);
        setIsSubmitted(true);
      },
      (error) => {
        setIsLoading(false);
        console.log(error.text);
      }
    );
  });

  return (
    <form onSubmit={onSubmit} autoComplete='off'>
      <Box>
        <CustomInput
          fieldName='name'
          placeholder={t('contact.name')}
          register={register}
          errors={errors}
        />
      </Box>
      <Box mt='0.3rem'>
        <CustomInput
          fieldName='email'
          placeholder={t('contact.email')}
          register={register}
          errors={errors}
        />
      </Box>
      <Box mt='0.3rem'>
        <CustomInput
          fieldName='message'
          placeholder={t('contact.message')}
          register={register}
          errors={errors}
          rows={3}
        />
      </Box>
      <Box mt='0.55rem' mb='0.2rem'>
        <SubmitButton
          width={100}
          color='font'
          size='sm'
          isLoading={isLoading}
          isSubmitted={isSubmitted}
        >
          {t('contact.send')}
        </SubmitButton>
      </Box>
    </form>
  );
};
