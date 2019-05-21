import React, { useState, useContext } from 'react';
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
import Store from '../../store/context';
import history from '../../helper/history';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { state, dispatch } = useContext(Store);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  async function handleLogout() {
    dispatch({ type: 'LOGOUT', payload: { user: {} } });
    history.push('/login');
  }
  const { isAuth, user } = state;

  return (
    <React.Fragment>
      <Row>
        <Col sm="12" md="12" lg="12">
          <Navbar
            color="info"
            expand="xl"
            className="navbar-dark"
            style={{ paddingLeft: 0, paddingRight: 0 }}
            light
          >
            <Container>
              <NavbarBrand href="/">TEST 3</NavbarBrand>
              <NavbarToggler onClick={handleToggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  {!isAuth ? (
                    <NavItem>
                      <NavLink href="/login">Login</NavLink>
                    </NavItem>
                  ) : (
                    <>
                      <NavItem>
                        <NavLink href="/">Profile</NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          {user.firstName}
                        </DropdownToggle>

                        <DropdownMenu right>
                          <DropdownItem onClick={handleLogout}>
                            Log Out
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </>
                  )}
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </React.Fragment>
  );
}
