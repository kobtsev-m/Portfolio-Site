import styled from 'styled-components';
import { rgba } from 'polished';

export const DemoTitle = styled.h3`
  color: ${({ theme }) => rgba(theme.color.font, 0.8)};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: 0.24rem;
  line-height: 0.29rem;
  text-transform: uppercase;
`;
