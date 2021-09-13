import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
`;

export interface SpinnerPropsType {
  size: string;
}

export const ClassicSpinner = styled.div<SpinnerPropsType>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-width: calc(0.15 * ${({ size }) => size});
  border-style: solid;
  border-color: ${({ theme }) => theme.color.font};
  border-top: calc(0.15 * ${({ size }) => size}) solid transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear 0s infinite;
`;

export const SolarSpinnerWrapper = styled.div<SpinnerPropsType>`
  .solar-system {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .orbit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fafbfc;
    border-radius: 50%;
  }
  .earth-orbit {
    width: calc(0.66 * ${({ size }) => size});
    height: calc(0.66 * ${({ size }) => size});
    animation: ${spinAnimation} 12s linear 0s infinite;
  }
  .venus-orbit {
    width: calc(0.48 * ${({ size }) => size});
    height: calc(0.48 * ${({ size }) => size});
    animation: ${spinAnimation} 7.4s linear 0s infinite;
  }
  .mercury-orbit {
    width: calc(0.36 * ${({ size }) => size});
    height: calc(0.36 * ${({ size }) => size});
    animation: ${spinAnimation} 3s linear 0s infinite;
  }
  .planet {
    position: absolute;
    top: calc(-0.02 * ${({ size }) => size});
    width: calc(0.04 * ${({ size }) => size});
    height: calc(0.04 * ${({ size }) => size});
    border-radius: 50%;
    background-color: #3ff9dc;
  }
  .sun {
    width: calc(0.14 * ${({ size }) => size});
    height: calc(0.14 * ${({ size }) => size});
    border-radius: 50%;
    background-color: #ffab91;
  }
`;
