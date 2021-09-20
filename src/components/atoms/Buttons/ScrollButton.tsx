import React from 'react';
import {
  ButtonProps,
  ScrollButtonChevron,
  ScrollButtonChevronsWrapper,
  ScrollButtonWrapper
} from './Buttons.styles';

export const ScrollButton = (props: ButtonProps) => (
  <ScrollButtonWrapper {...props}>
    <ScrollButtonChevronsWrapper>
      <ScrollButtonChevron />
      <ScrollButtonChevron />
    </ScrollButtonChevronsWrapper>
  </ScrollButtonWrapper>
);
