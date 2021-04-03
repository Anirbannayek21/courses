import React from "react";
import { Navbar, NavDropdown, Nav, Form, Button, FormControl } from "react-bootstrap"
import { NavLink } from "react-router-dom";

const Navbarmy = () => {
  return (
    <>
      <div className="container nav-bg mb-5" >
        <div className="row">
          <div className="col-12 mx-auto ">
            <Navbar expand="lg">
              <Navbar.Brand href="#home" className="brand_name" >Nayek School</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <NavLink exact activeClassName="active_class" className="nav_item" to="/">Home</NavLink>
                  <NavLink exact activeClassName="active_class" className="nav_item" to="/service">Service</NavLink>
                  <NavLink exact activeClassName="active_class" className="nav_item" to="/about">About</NavLink>
                  <NavLink exact activeClassName="active_class" className="nav_item" to="/contact">contact</NavLink>
                </Nav>
                
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbarmy;