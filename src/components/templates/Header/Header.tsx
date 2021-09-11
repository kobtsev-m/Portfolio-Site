import { useEffect, useState } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import { Theme } from 'types/styled';
import { DarkMoonIcon, LightMoonIcon, WorldIcon, BarsIcon } from 'assets';
import {
  Box,
  Container,
  Row,
  Column,
  ClearButton,
  CustomButton,
  CustomIcon
} from 'components/atoms';
import {
  Nav,
  Navbar,
  NavCollapse,
  NavCollapseItem,
  NavItem
} from './Header.styles';

interface PropsType {
  theme: Theme;
  toggleTheme: () => void;
}

export const Header = (props: PropsType) => {
  const { theme, toggleTheme } = props;
  const [navCollapse, setNavCollapse] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setNavCollapse(false);
  }, [windowSize]);

  return (
    <Navbar>
      <Container>
        <Row>
          <Column xs={6} sm={10} xl={5} flex align='center'>
            <Nav>
              <NavItem>
                <ClearButton>
                  <CustomIcon
                    src={WorldIcon}
                    width='45px'
                    height='45px'
                    margin
                  />
                  <Box hideAt='lg'>EN</Box>
                </ClearButton>
              </NavItem>
              <NavItem>
                <ClearButton onClick={toggleTheme}>
                  <CustomIcon
                    src={theme === Theme.Dark ? DarkMoonIcon : LightMoonIcon}
                    width='45px'
                    height='45px'
                    margin
                  />
                  <Box hideAt='lg'>{theme.toUpperCase()} THEME</Box>
                </ClearButton>
              </NavItem>
            </Nav>
          </Column>
          <Column xs={6} sm={2} xl={7} flex justify='end' hideAt='xl'>
            <Nav>
              <NavItem>ABOUT</NavItem>
              <NavItem>PROJECTS</NavItem>
              <NavItem>CONTACT</NavItem>
              <NavItem>
                <CustomButton>RESUME</CustomButton>
              </NavItem>
            </Nav>
          </Column>
          <Column xs={6} sm={2} xl={7} flex justify='end' showAt='xl'>
            <ClearButton onClick={() => setNavCollapse(!navCollapse)}>
              <CustomIcon src={BarsIcon} width='50px' height='50px' />
            </ClearButton>
          </Column>
        </Row>
        {navCollapse && (
          <Row>
            <Column position='relative'>
              <NavCollapse>
                <NavCollapseItem>ABOUT</NavCollapseItem>
                <NavCollapseItem>PROJECTS</NavCollapseItem>
                <NavCollapseItem>CONTACT</NavCollapseItem>
                <NavCollapseItem>
                  <CustomButton>RESUME</CustomButton>
                </NavCollapseItem>
              </NavCollapse>
            </Column>
          </Row>
        )}
      </Container>
    </Navbar>
  );
};
