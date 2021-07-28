import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { CustomIcon } from 'styles/common/images';

const FixedElement = css`
  position: fixed;
  top: ${(props) => props.top || ''};
  right: ${(props) => props.right || ''};
  bottom: ${(props) => props.bottom || ''};
  left: ${(props) => props.left || ''};
  height: ${(props) => props.height};
`;

export const SideLine = styled.div`
  ${FixedElement};
  width: 1px;
  background-color: ${({ theme }) => rgba(theme.fontColor, 0.8)};
`;

export const SideIcon = styled(CustomIcon)`
  ${FixedElement};
  margin: 0;
`;
