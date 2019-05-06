import React from 'react';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function Header() {

  return (
    <React.Fragment>
      <div className="header-nav">
        <Container>
          <Row>
            <Col sm="12" md="12" lg="12">
              <Navbar
                color=""
                expand="xl"
                className="justify-content-center"
                style={{ paddingLeft: 0, paddingRight: 0 }}
                light
              >
                <NavbarBrand href="/">TEST 3</NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                  <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink href="/login">Login</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/">Profile</NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          Ye Maung
                        </DropdownToggle>

                        <DropdownMenu right>
                          <DropdownItem>
                            Log Out
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
