import styled from 'styled-components';

interface ImagePropsType {
  width: string;
  height: string;
  src: string;
  margin?: boolean;
}

export const CustomIcon = styled.div<ImagePropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  mask: ${(props) => `url(${props.src})`} no-repeat center;
  background-color: ${({ theme }) => theme.color.font};
  margin-right: ${(props) => props.margin && '0.6em'};
`;

export const CustomImage = styled.div<ImagePropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;
