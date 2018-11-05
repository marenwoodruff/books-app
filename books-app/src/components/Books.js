import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    let booksApi = 'http://localhost:3001/api/books';
    fetch(booksApi)
      .then(res => res.json())
      .then(books => {
        console.log('books, pre state', books);
        this.setState({
          books
        }, () => {
          console.log('books, post setState ', this.state.books);
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    let books = this.state.books.map((book) => (
      <Book key={book.id} title={book.title} author={book.author} publication_year={book.publication_year} read={book.read} />
    ))

    return (
      <div>
        <h1>My Favorite Books!</h1>
        <ul>
          {books}
        </ul>
      </div>
    )
  }
}

export default Books;
