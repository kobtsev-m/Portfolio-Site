import React from 'react';
import { ClassicSpinner } from 'components/atoms';
import {
  BorderButtonWrapper,
  ScrollButtonChevron,
  ScrollButtonChevronsWrapper,
  ScrollButtonWrapper
} from './Buttons.style';

type ButtonPropsType = React.HTMLAttributes<HTMLButtonElement>;

interface BorderButtonPropsType extends ButtonPropsType {
  isLoading?: boolean;
}

export const BorderButton = (props: BorderButtonPropsType) => {
  const { isLoading, children, ...restProps } = props;
  return (
    <BorderButtonWrapper disabled={isLoading} {...restProps}>
      {isLoading ? <ClassicSpinner size='1em' /> : children}
    </BorderButtonWrapper>
  );
};

export const ScrollButton = (props: ButtonPropsType) => (
  <ScrollButtonWrapper {...props}>
    <ScrollButtonChevronsWrapper>
      <ScrollButtonChevron />
      <ScrollButtonChevron />
    </ScrollButtonChevronsWrapper>
  </ScrollButtonWrapper>
);
