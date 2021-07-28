import styled from 'styled-components';

export const CustomIcon = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  mask: ${(props) => `url(${props.src})`} no-repeat center;
  background-color: ${({ theme }) => theme.fontColor};
  margin-right: 0.6em;
`;

export const CustomImage = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;
