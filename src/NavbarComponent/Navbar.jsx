import React, { Component } from 'react';
import { Navbar, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import './navbar.css';

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' className='main-navbar'>
        <Dropdown as={ButtonGroup}>
          <Button className='dropdown-btn'>January</Button>

          <Dropdown.Toggle split variant='success' id='dropdown-split-basic' />

          <Dropdown.Menu>
            <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    );
  }
}
