import { FC, HTMLAttributes } from 'react';
import { Input } from './Form.styles';

interface CustomInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
}

export const CustomInput: FC<CustomInputProps> = (props) => {
  return <Input type='text' {...props} />;
};
