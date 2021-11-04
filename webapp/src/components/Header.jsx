import React from "react";

import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Climeworks from "./Climeworks";
import Button from 'react-bootstrap/Button'
function Header(){

return (

<div>

  <Navbar class="navbars" expand="lg">
    <Container>
    <Button class= "redirect" variant="outline-dark" size="lg" href="/Main">Home</Button>
    <Button class= "redirectContact" variant="outline-primary" size="lg" href="/Contact">Contact</Button>
      <Navbar.Brand href="#home">
        <h1 class="header"> <span class="emoji">🌎</span> Carbon Capture Industries Library <span class="emoji">🌎</span></h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <NavDropdown title="Companies" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Climeworks">Climeworks</NavDropdown.Item>
            <NavDropdown.Item href="/CarbonEngineering">Carbon Engineering</NavDropdown.Item>
            <NavDropdown.Item href="/Quest">Quest</NavDropdown.Item>
            <NavDropdown.Item href="/GlobalThermostat">Global Thermostat</NavDropdown.Item>
            <NavDropdown.Item href="/CarbFix">CarbFix </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="/GlobalCarbonEmission">Global Carbon Emission</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>

);

}
export default Header;
