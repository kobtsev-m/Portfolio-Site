import styled from 'styled-components';
import { media } from 'styles/media';

export const Navbar = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  ${media('md', 'height: 110px')};
  background: ${({ theme }) => theme.background};
  margin-top: 0;
  ${media('lg', 'margin-top: 0.2rem')};
  z-index: 1000;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  font-size: 0.24rem;
  line-height: 0.32rem;
  &:not(:first-of-type) {
    padding-left: 1.75em;
  }
`;

export const NavCollapse = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.background};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.15rem 0;
`;

export const NavCollapseItem = styled.div`
  margin-top: 0.2rem;
`;
