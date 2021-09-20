import styled, { css, DefaultTheme } from 'styled-components';
import { rgba } from 'polished';

const InputStyles = css`
  width: 100%;
  padding: 10px 0;
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
  &::placeholder {
    color: ${({ theme }) => theme.color.grey};
  }
  &:focus {
    border-bottom-color: ${({ theme }) => rgba(theme.color.font, 0.7)};
  }
`;

export const Input = styled.input`
  ${InputStyles}
`;

export const Textarea = styled.textarea`
  ${InputStyles};
  resize: none;
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
