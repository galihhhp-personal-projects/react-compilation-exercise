import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './card.css';

export default class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      publisher: '',
    };
  }

  handleChange = (newValue) => {
    this.setState({
      title: newValue,
      author: newValue,
      publisher: newValue,
    })
  }

  render() {
    return (
      <Card>
        <Card.Header as='h5'>{this.props.title} </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.author}</Card.Title>
          <Card.Text>{this.props.publisher}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}
