import styled from 'styled-components';

export const Navbar = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.navHeight};
  background: ${({ theme }) => theme.background};
  margin-top: ${({ theme }) => theme.navMargin};
`;

export const Nav = styled.nav``;

export const NavItem = styled.div`
  font-size: 24px;
  line-height: 32px;
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
  padding: 1em 0;
`;

export const NavCollapseItem = styled.div`
  margin-top: 2em;
`;
