import { HTMLProps } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { rgba } from 'polished';

interface TextareaHtmlProps extends HTMLProps<HTMLTextAreaElement> {
  isError: boolean;
  rows?: number;
}

export const ErrorSpan = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  opacity: 0;
  background-color: ${({ theme }) => rgba(theme.color.danger, 0.4)};
  border-radius: 5px;
  font-size: 0.15rem;
  padding: 0.1rem 0.1rem;
`;

export const Textarea = styled.textarea<TextareaHtmlProps>`
  position: relative;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 3px solid ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.font};
  outline: none;
  font-family: ${({ theme }) => theme.font.montserrat};
  font-style: normal;
  font-weight: normal;
  font-size: 0.24rem;
  line-height: 0.29rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: border-color 0.2s;
  resize: none;
  padding: 10px 0;
  &::placeholder {
    color: ${({ theme }) => theme.color.grey};
  }
  &:focus {
    border-bottom-color: ${({ theme }) => rgba(theme.color.font, 0.7)};
  }
  ${({ isError }) =>
    isError &&
    css`
      border-bottom-color: ${({ theme }) => rgba(theme.color.danger, 0.7)};
      &:focus {
        border-bottom-color: ${({ theme }) => rgba(theme.color.danger, 0.7)};
      }
      &:focus ~ ${ErrorSpan} {
        opacity: 1;
      }
    `}
`;

interface HRProps {
  color: keyof DefaultTheme['color'];
  height?: string;
}

export const HR = styled.hr<HRProps>`
  width: 100%;
  height: ${({ height }) => height ?? '1px'};
  background-color: ${({ theme, color }) => theme.color[color]};
`;
