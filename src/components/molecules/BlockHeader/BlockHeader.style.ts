import styled from 'styled-components';
import { rgba } from 'polished';
import { BlockTitle } from 'components/atoms';

export const Title = styled(BlockTitle)`
  position: absolute;
`;

export const Line = styled.div`
  position: absolute;
  top: 2.8em;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => rgba(theme.fontColor, 0.7)};
`;

export const Wrapper = styled.div<{ align?: string }>`
  position: relative;
  font-size: 100px;
  height: 3.6em;
  ${Title} {
    right: ${(props) => (props.align === 'right' ? 0 : '')};
    left: ${(props) => (props.align === 'left' ? 0 : '')};
  }
  ${Title}:nth-of-type(3n + 1) {
    top: 0;
    color: ${({ theme }) => rgba(theme.secondaryColor, 0.7)};
  }
  ${Title}:nth-of-type(3n + 2) {
    top: 1em;
    color: ${({ theme }) => rgba(theme.fontColor, 0.7)};
  }
  ${Title}:nth-of-type(3n) {
    top: 2em;
    color: ${({ theme }) => rgba(theme.accentColor, 0.9)};
  }
`;
