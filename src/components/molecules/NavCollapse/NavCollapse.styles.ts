import styled from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.nav`
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 99px);
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.15rem 0;
`;

export const NavItem = styled.div`
  color: ${({ theme }) => rgba(theme.color.font, 0.7)};
  font-family: ${({ theme }) => theme.font.openSans};
  font-weight: 800;
  font-size: 0.6rem;
  line-height: 1.36rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 1vh;
  &:last-of-type {
    margin-top: 3vh;
  }
  &:last-of-type button {
    font-size: 0.3rem;
    padding: 0.3rem 0.8rem;
  }
`;
