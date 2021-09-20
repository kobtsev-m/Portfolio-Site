import { FC, useEffect, useState } from 'react';
import { Theme } from 'types';
import { useWindowSize } from 'hooks';
import { Container } from 'components/atoms';
import { Nav, NavCollapse } from 'components/molecules';
import { Navbar } from './Header.styles';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Header: FC<HeaderProps> = (props) => {
  const [navCollapse, setNavCollapse] = useState(false);
  const { windowWidth } = useWindowSize();

  useEffect(() => {
    setNavCollapse(false);
  }, [windowWidth]);

  return (
    <Navbar>
      <Container position='relative'>
        <Nav
          navCollapse={navCollapse}
          setNavCollapse={setNavCollapse}
          {...props}
        />
      </Container>
      <NavCollapse navCollapse={navCollapse} setNavCollapse={setNavCollapse} />
    </Navbar>
  );
};
