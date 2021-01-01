import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import './index.css';

export default class CounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      inputAutoIncrementCount: 0,
      autoIncrementCount: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    if (!this.state.count <= 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  handleResetCount = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <Container className='d-flex flex-column justify-content-center'>
        <h1  className='text-center'>{this.state.count}</h1>

        <input value={this.state.count} />
        <Button onClick={this.handleIncrement}>+</Button>
        <Button onClick={this.handleDecrement}>-</Button>
        <Button onClick={this.handleResetCount}>Reset</Button>
      </Container>
    );
  }
}
