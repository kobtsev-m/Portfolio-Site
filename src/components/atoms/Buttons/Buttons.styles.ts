import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

type HtmlButtonPropsType = React.HTMLAttributes<HTMLButtonElement>;

export interface ButtonPropsType extends HtmlButtonPropsType {
  width?: number;
  isLoading?: boolean;
}

export const ClearButton = styled.button<ButtonPropsType>`
  width: ${({ width }) => `${width}%`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 32px;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.font};
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const CustomButton = styled(ClearButton)`
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => rgba(theme.color.accent, 0.7)};
  border: 10px solid ${({ theme }) => rgba(theme.color.accent, 0.7)};
  padding: 0.6em 2em;
`;

export const BorderButtonWrapper = styled(ClearButton)`
  font-size: 20px;
  line-height: 32px;
  width: 100%;
  height: 2.8em;
  font-family: ${({ theme }) => theme.font.openSans};
  font-weight: bold;
  letter-spacing: 0.1em;
  color: ${({ theme }) => rgba(theme.color.font, 0.7)};
  border: 3px solid ${({ theme }) => rgba(theme.color.font, 0.7)};
  padding: 0 2em;
  cursor: pointer;
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.font};
    color: ${({ theme }) => theme.color.background};
    transition: all 0.25s ease-in-out;
  }
`;

const scrollAnimation = keyframes`
  0% {
    opacity: 0;
    height: 6px;
  }
  40% {
    opacity: 1;
    height: 10px;
  }
  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }
  100% {
    height: 3px;
    opacity: 0;
  }
`;

const pulseAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`;

export const ScrollButtonWrapper = styled.button`
  position: relative;
  width: 30px;
  height: 50px;
  background: transparent;
  border: 3px solid ${({ theme }) => theme.color.font};
  border-radius: 50px;
  margin: 0 0 15px 15px;
  opacity: 0.8;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 4px;
    height: 4px;
    background: ${({ theme }) => rgba(theme.color.font, 0.9)};
    border-radius: 100%;
    margin-left: -2px;
    animation: ${scrollAnimation} 2s infinite;
  }
`;

export const ScrollButtonChevronsWrapper = styled.div`
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScrollButtonChevron = styled.div`
  margin-top: -4px;
  position: relative;
  border: solid ${({ theme }) => theme.color.font};
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  &:nth-child(odd) {
    animation: ${pulseAnimation} 500ms ease infinite alternate;
  }
  &:nth-child(even) {
    animation: ${pulseAnimation} 500ms ease infinite alternate 250ms;
  }
`;
