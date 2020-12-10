import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
      <Navbar bg="danger" expand="lg">
        <Navbar.Brand style={{fontFamily:'fantasy',color:'grey'}}>AutomatedLogic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink style={{color:'white',textDecoration:'none',padding:'10px'}} to="/checklist">PreMigration</NavLink>
            <NavLink style={{color:'white',textDecoration:'none',padding:'10px'}}  to="/questionnare">System Configuration</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}
export default Header
