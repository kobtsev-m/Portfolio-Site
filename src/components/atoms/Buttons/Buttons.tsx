import React from 'react';
import { ClassicSpinner } from 'components/atoms';
import {
  ButtonProps,
  BorderButtonWrapper,
  ScrollButtonChevron,
  ScrollButtonChevronsWrapper,
  ScrollButtonWrapper
} from './Buttons.styles';

export const BorderButton = (props: ButtonProps) => {
  const { isLoading, children, ...restProps } = props;
  return (
    <BorderButtonWrapper disabled={isLoading} {...restProps}>
      {isLoading ? <ClassicSpinner size='1em' /> : children}
    </BorderButtonWrapper>
  );
};

export const ScrollButton = (props: ButtonProps) => (
  <ScrollButtonWrapper {...props}>
    <ScrollButtonChevronsWrapper>
      <ScrollButtonChevron />
      <ScrollButtonChevron />
    </ScrollButtonChevronsWrapper>
  </ScrollButtonWrapper>
);
