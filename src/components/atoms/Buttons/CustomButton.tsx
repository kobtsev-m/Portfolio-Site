import { FC } from 'react';
import {
  CustomButtonProps,
  CustomButtonSpan,
  CustomButtonWrapper
} from './Buttons.styles';

export const CustomButton: FC<CustomButtonProps> = (props) => {
  const { children, ...restProps } = props;
  return (
    <CustomButtonWrapper {...restProps}>
      {children}
      <CustomButtonSpan color={restProps.color} />
      <CustomButtonSpan color={restProps.color} />
      <CustomButtonSpan color={restProps.color} />
      <CustomButtonSpan color={restProps.color} />
    </CustomButtonWrapper>
  );
};
