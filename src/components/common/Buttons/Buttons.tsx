import React from 'react';
import { ClassicSpinner } from '../Loaders/Loaders';
import {
  ClearButtonStyled,
  CustomButtonStyled,
  BorderButtonWrapper,
  ScrollButtonChevron,
  ScrollButtonChevronsWrapper,
  ScrollButtonWrapper
} from './Buttons.style';

export const ClearButton = ClearButtonStyled;
export const CustomButton = CustomButtonStyled;

interface BorderButtonPropsType {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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

interface ScrollButtonPropsType {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ScrollButton = (props: ScrollButtonPropsType) => {
  const { onClick } = props;
  return (
    <ScrollButtonWrapper onClick={onClick}>
      <ScrollButtonChevronsWrapper>
        <ScrollButtonChevron />
        <ScrollButtonChevron />
      </ScrollButtonChevronsWrapper>
    </ScrollButtonWrapper>
  );
};
