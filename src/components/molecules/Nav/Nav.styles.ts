import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  font-size: 0.24rem;
  line-height: 0.32rem;
  text-transform: uppercase;
  cursor: pointer;
  &:not(:first-of-type) {
    margin-left: 1.75em;
  }
`;
