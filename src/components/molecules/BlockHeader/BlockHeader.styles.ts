import styled from 'styled-components';
import { rgba } from 'polished';
import { BlockTitle } from 'components/atoms';

export const Title = styled(BlockTitle)`
  position: absolute;
  z-index: 900;
`;

export const Line = styled.div`
  position: absolute;
  top: 2.75rem;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => rgba(theme.color.font, 0.7)};
`;

export const Wrapper = styled.div<{ align?: string }>`
  position: relative;
  font-size: 1rem;
  height: 3.5rem;
  ${Title} {
    right: ${(props) => (props.align === 'right' ? 0 : '')};
    left: ${(props) => (props.align === 'left' ? 0 : '')};
  }
  ${Title}:nth-of-type(3n + 1) {
    top: 0;
    color: ${({ theme }) => rgba(theme.color.secondary, 0.7)};
  }
  ${Title}:nth-of-type(3n + 2) {
    top: 1em;
    color: ${({ theme }) => rgba(theme.color.font, 0.7)};
  }
  ${Title}:nth-of-type(3n) {
    top: 2em;
    color: ${({ theme }) => rgba(theme.color.accent, 0.9)};
  }
`;
