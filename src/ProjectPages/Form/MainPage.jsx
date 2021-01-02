import React, { useEffect } from 'react';
import CardComponent from './Card';
import Form from './Form';
import Split from './Split';

export default function MainPage(props) {
  useEffect(() => {
    document.title = 'Form App';
  });

  return (
    <Split
      left={<Form />}
      right={
        <CardComponent
          title={props.title}
          author={props.author}
          publisher={props.publisher}
        />
      }
    />
  );
}
