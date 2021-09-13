import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { CustomIcon } from 'components/atoms';

interface FixedElementPropsType {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  height: string;
}

const FixedElement = css<FixedElementPropsType>`
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
  background-color: ${({ theme }) => rgba(theme.color.font, 0.8)};
  z-index: 1100;
`;

export const SideIcon = styled(CustomIcon)`
  ${FixedElement};
  margin: 0;
`;
