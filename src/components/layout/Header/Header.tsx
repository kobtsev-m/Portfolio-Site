import { useState, useEffect } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import { Col, Container, Row } from 'react-bootstrap';
import { ClearButton, CustomButton } from 'styles/common/buttons';
import { CustomIcon } from 'styles/common/images';
import {
  Navbar,
  Nav,
  NavItem,
  NavCollapse,
  NavCollapseItem
} from './Header.styles';

type PropsType = {
  theme: string;
  themeToggler: () => void;
};

export default function Header(props: PropsType) {
  const { theme, themeToggler } = props;
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
                  <CustomIcon
                    src='/img/icons/world.svg'
                    width='45px'
                    height='45px'
                  />
                  <span>EN</span>
                </ClearButton>
              </NavItem>
              <NavItem>
                <ClearButton onClick={themeToggler}>
                  <CustomIcon
                    src={`/img/icons/${theme}-moon.svg`}
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
              <CustomIcon
                src='/img/icons/bars-solid.svg'
                width='50px'
                height='50px'
              />
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
}
