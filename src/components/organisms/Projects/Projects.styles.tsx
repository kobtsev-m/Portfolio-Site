import styled from 'styled-components';
import { rgba } from 'polished';

export const InscriptionText = styled.h5`
  color: ${({ theme }) => rgba(theme.color.font, 0.8)};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: 0.18rem;
  line-height: 0.24rem;
  text-transform: uppercase;
  transform: translateX(50%) rotate(90deg);
`;
