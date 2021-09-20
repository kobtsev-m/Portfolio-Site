import { FC } from 'react';
import { ClassicSpinner } from '~/components/atoms';
import { BorderButtonWrapper, ButtonProps } from './Buttons.styles';

export const BorderButton: FC<ButtonProps> = (props) => {
  const { isLoading, children, ...restProps } = props;
  return (
    <BorderButtonWrapper disabled={isLoading} {...restProps}>
      {isLoading ? <ClassicSpinner size='15px' /> : children}
    </BorderButtonWrapper>
  );
};
