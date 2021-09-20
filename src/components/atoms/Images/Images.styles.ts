import styled from 'styled-components';

interface ImageProps {
  width: string;
  height: string;
  src: string;
  margin?: boolean;
}

export const CustomIcon = styled.div<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  mask: ${(props) => `url(${props.src})`} no-repeat center;
  mask-size: contain;
  background-color: ${({ theme }) => theme.color.font};
`;

export const CustomImage = styled.div<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;
