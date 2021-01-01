import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import NavbarComponent from '../NavbarComponent/Navbar';
import './homepage.css';

export default class HomepageComponent extends Component {
  render() {
    return (
      <Fragment>
        <NavbarComponent />
        <Container fluid>
          <div class='d-flex flex-column justify-content-center home-wrapper'>
            <h1>2021</h1>
            <h1>
              Galihhhp's <br /> Personal Projects
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              at, facilis ullam quis <br /> ad quia nisi fuga rem ab doloribus
              minima nam tenetur eum provident <br /> mollitia! Quae repudiandae
              optio dicta!
            </p>
          </div>
        </Container>
      </Fragment>
    );
  }
}
