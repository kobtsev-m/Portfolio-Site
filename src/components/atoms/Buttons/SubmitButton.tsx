import { FC } from 'react';
import { CheckIcon } from '~/assets';
import { ClassicSpinner, CustomIcon } from '~/components/atoms';
import { SubmitButtonWrapper, CustomButtonProps } from './Buttons.styles';

interface SubmitButtonProps extends CustomButtonProps {
  isSubmitted: boolean;
}

export const SubmitButton: FC<SubmitButtonProps> = (props) => {
  const { isLoading, isSubmitted, children, ...restProps } = props;
  return (
    <SubmitButtonWrapper
      type='submit'
      disabled={isLoading || isSubmitted}
      {...restProps}
    >
      {isLoading ? (
        <ClassicSpinner size='18px' />
      ) : isSubmitted ? (
        <CustomIcon src={CheckIcon} width='18px' height='18px' />
      ) : (
        children
      )}
    </SubmitButtonWrapper>
  );
};
