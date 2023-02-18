import React,{Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homes from './Homes';
import Registrationform from './Registrationform'
import CLUREGISTRAYIONB from './CLUBREGISTRAYION'
import LOGIN from './LOGIN'


function NavbarComp(){
    return(
        <>
        <Router>
          
       <div>
        <Navbar bg="dark" variant={'dark'} expand="lg">
      <Container>
        <Navbar.Brand href="#home">PLAYER </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/home'}>Homes</Nav.Link>
            <Nav.Link  as={Link} to={'/PLAYER REGISTRAYION'}>Registrationform</Nav.Link>
            <Nav.Link as={Link} to={'/CLUREGISTRAYIONB'}>CLUREGISTRAYIONB </Nav.Link>
            <Nav.Link href="#link">LOGIN</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
      <Switch>
      <Route path="/Homes">
            <Homes />
          </Route>
          <Route path="/Registrationform">
            <Registrationform/>
          </Route>
          <Route path="/CLUREGISTRAYIONB">
            <CLUREGISTRAYIONB />
          </Route>
          <Route path="/LOGIN">
            <LOGIN />
          </Route>
      </Switch>
    </div>
    </Router>
        </>
    )
}
export default NavbarComp;

