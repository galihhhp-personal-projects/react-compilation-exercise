import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      publisher: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      title: e.target.value,
      author: e.target.value,
      publisher: e.target.value,
    });
  };

  handleSubmit = () => {

  }

  render() {
    return (
      <Form>
        <Form.Group controlId='formTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Enter title' onChange={this.handleInput} />
        </Form.Group>

        <Form.Group controlId='formAuthor'>
          <Form.Label>Author</Form.Label>
          <Form.Control type='text' placeholder='Enter author' onChange={this.handleInput} />
        </Form.Group>

        <Form.Group controlId='formPublisher'>
          <Form.Label>Publisher</Form.Label>
          <Form.Control type='text' placeholder='Enter publisher' onChange={this.handleInput} />
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}
