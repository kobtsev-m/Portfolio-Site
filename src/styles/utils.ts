import styled from 'styled-components';

interface AbsoluteElementPropsType {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export const AbsoluteElement = styled.div<AbsoluteElementPropsType>`
  position: absolute;
  top: ${(props) => props.top || ''};
  right: ${(props) => props.right || ''};
  bottom: ${(props) => props.bottom || ''};
  left: ${(props) => props.left || ''};
  transform: ${(props) => props.right === '50%' && 'translateX(-50%)'};
`;
