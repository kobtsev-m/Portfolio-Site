import styled from 'styled-components';
import { rgba } from 'polished';

export const Card = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.layout};
  border-radius: 15px;
`;

export const CardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.color.grey};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const CardDot = styled.div`
  position: absolute;
  top: 0.2rem;
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 50%;
  &:nth-of-type(1) {
    left: 0.3rem;
    background-color: ${({ theme }) => rgba(theme.color.secondary, 0.7)};
  }
  &:nth-of-type(2) {
    left: 0.5rem;
    background-color: ${({ theme }) => rgba(theme.color.font, 0.7)};
  }
  &:nth-of-type(3) {
    left: 0.7rem;
    background-color: ${({ theme }) => rgba(theme.color.accent, 0.9)};
  }
`;

export const CardBody = styled.div`
  position: relative;
  height: calc(100% - 0.5rem);
`;

export const CardSeparator = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 40%;
  background-color: ${({ theme }) => theme.color.grey};
  &:nth-of-type(1) {
    top: 0;
  }
  &:nth-of-type(1) {
    top: 60%;
  }
`;

export const CardSeparatorText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.color.grey};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: 0.2rem;
  line-height: 0.24rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;
