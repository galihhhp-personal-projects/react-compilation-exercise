import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CardComponent from './Card';
import Form from './Form';
import Split from './Split';

export default function MainPage(props) {
  useEffect(() => {
    document.title = 'Form App';
  });

  return (
    <Container>
    </Container>
  );
}
