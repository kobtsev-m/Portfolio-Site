import { FC, HTMLAttributes } from 'react';
import { Textarea } from './Form.styles';

interface CustomTextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  rows?: number;
}

export const CustomTextarea: FC<CustomTextareaProps> = (props) => {
  return <Textarea {...props} />;
};
