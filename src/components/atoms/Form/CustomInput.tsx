import { FC } from 'react';
import { FieldValues, FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box } from '~/components/atoms';
import { ErrorSpan, Textarea } from './Form.styles';

export interface InputProps {
  fieldName: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
  rows?: number;
}

export const CustomInput: FC<InputProps> = (props) => {
  const { fieldName, errors, register, placeholder, rows } = props;
  const { t } = useTranslation();
  return (
    <Box position='relative'>
      <Textarea
        type='text'
        {...register(fieldName)}
        isError={errors[fieldName] !== undefined}
        placeholder={placeholder}
        rows={rows ?? 1}
      />
      {errors?.[fieldName] && (
        <ErrorSpan>{t(`errors.${errors[fieldName].message}`)}</ErrorSpan>
      )}
    </Box>
  );
};
