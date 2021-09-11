import React from 'react';
import { ClassicSpinner } from 'components/atoms';
import {
  ButtonPropsType,
  BorderButtonWrapper,
  ScrollButtonChevron,
  ScrollButtonChevronsWrapper,
  ScrollButtonWrapper
} from './Buttons.styles';

export const BorderButton = (props: ButtonPropsType) => {
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
