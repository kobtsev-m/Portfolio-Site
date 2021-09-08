import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useWindowSize } from 'hooks/useWindowSize';
import { ClearButton, CustomButton, CustomIcon } from 'components/atoms';
import { Theme } from 'types/types';
import { DarkMoonIcon, LightMoonIcon, WorldIcon, BarsIcon } from 'assets';
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
          <Col xs={6} sm={10} xl={5} className='d-flex align-center'>
            <Nav className='d-flex align-center'>
              <NavItem>
                <ClearButton>
                  <CustomIcon src={WorldIcon} width='45px' height='45px' />
                  <span>EN</span>
                </ClearButton>
              </NavItem>
              <NavItem>
                <ClearButton onClick={toggleTheme}>
                  <CustomIcon
                    src={theme === Theme.Dark ? DarkMoonIcon : LightMoonIcon}
                    width='45px'
                    height='45px'
                  />
                  <span>{theme.toUpperCase()} THEME</span>
                </ClearButton>
              </NavItem>
            </Nav>
          </Col>
          <Col xs={6} sm={2} xl={7} className='d-none d-xl-flex justify-end'>
            <Nav className='d-flex align-center'>
              <NavItem>ABOUT</NavItem>
              <NavItem>PROJECTS</NavItem>
              <NavItem>CONTACT</NavItem>
              <NavItem>
                <CustomButton>RESUME</CustomButton>
              </NavItem>
            </Nav>
          </Col>
          <Col className='d-flex d-xl-none justify-end'>
            <ClearButton onClick={() => setNavCollapse(!navCollapse)}>
              <CustomIcon src={BarsIcon} width='50px' height='50px' />
            </ClearButton>
          </Col>
        </Row>
        {navCollapse && (
          <Row>
            <Col className='position-relative'>
              <NavCollapse>
                <NavCollapseItem>ABOUT</NavCollapseItem>
                <NavCollapseItem>PROJECTS</NavCollapseItem>
                <NavCollapseItem>CONTACT</NavCollapseItem>
                <NavCollapseItem>
                  <CustomButton>RESUME</CustomButton>
                </NavCollapseItem>
              </NavCollapse>
            </Col>
          </Row>
        )}
      </Container>
    </Navbar>
  );
};
