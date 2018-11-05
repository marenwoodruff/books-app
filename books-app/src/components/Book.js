import React from 'react';

const Book = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <h3>by: {props.author}</h3>
      <p>published on: {props.publication_year}</p>
      <p>read: {props.read.toString()}</p>
    </li>
  )
}

export default Book;
