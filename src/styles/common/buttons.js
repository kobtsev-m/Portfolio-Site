import styled from 'styled-components';
import { rgba } from 'polished';

export const ClearButton = styled.button`
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

export const CustomButton = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => rgba(theme.accentColor, 0.7)};
  border: 10px solid ${({ theme }) => rgba(theme.accentColor, 0.7)};
  padding: 0.6em 1.5em;
`;
