import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './counter.css';

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

  componentDidMount() {
    document.title = 'Counter App';
  }

  render() {
    return (
      <Container className='d-flex flex-column justify-content-center'>
        <h1 className='text-center'>{this.state.count}</h1>
        <input value={this.state.count} />
        <button className='btn' onClick={this.handleIncrement}>
          +
        </button>
        <button className='btn' onClick={this.handleDecrement}>
          -
        </button>
        <button className='btn' onClick={this.handleResetCount}>
          Reset
        </button>
      </Container>
    );
  }
}
