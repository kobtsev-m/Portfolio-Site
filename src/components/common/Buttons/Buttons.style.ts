import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

export const ClearButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.fontColor};
  border: none;
  &:focus {
    outline: none;
  }
`;

export const CustomButtonStyled = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => rgba(theme.accentColor, 0.7)};
  border: 10px solid ${({ theme }) => rgba(theme.accentColor, 0.7)};
  padding: 0.6em 1.5em;
`;

export const BorderButtonWrapper = styled(ClearButtonStyled)`
  width: 100%;
  height: 3.2em;
  font-family: ${({ theme }) => theme.fontOpenSans};
  font-weight: bold;
  letter-spacing: 0.1em;
  color: ${({ theme }) => rgba(theme.fontColor, 0.7)};
  border: 3px solid ${({ theme }) => rgba(theme.fontColor, 0.7)};
  padding: 0 2em;
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.fontColor};
    color: ${({ theme }) => theme.background};
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
  border: 3px solid ${({ theme }) => theme.fontColor};
  border-radius: 50px;
  margin: 0 0 15px 15px;
  opacity: 0.8;
  &::before {
    content: '';
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 4px;
    height: 4px;
    background: ${({ theme }) => rgba(theme.fontColor, 0.9)};
    border-radius: 100%;
    margin-left: -2px;
    animation: ${scrollAnimation} 2s infinite;
  }
  @media (max-width: 768px) {
    display: none;
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
  border: solid ${({ theme }) => theme.fontColor};
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
