import React, { Component } from 'react';
import Book from './Book';
import BookForm from './BookForm';

let booksApi = 'http://localhost:3001/api/books';

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      title: '',
      author: '',
      publication_year: '',
      read: false
    }

    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  componentDidMount() {
    fetch(booksApi)
      .then(res => res.json())
      .then(books => {
        this.setState({
          books
        }, () => {
          console.log('books, post setState ', this.state.books);
        })
      })
      .catch(err => console.log(err));
  }

  onInputChange(e) {
    // console.log('target name ', e.target.name)
    // console.log('target value ', e.target.value)
    switch(e.target.name) {
      case 'title':
        this.setState({
          title: e.target.value
        })
        break;
      case 'author':
        this.setState({
          author: e.target.value
        })
        break;
      case 'publication_year':
        this.setState({
          publication_year: e.target.value
        })
        break;
      case 'read':
        this.setState({
          read: e.target.value
        })
        break;
      default:
        console.log('please enter valid information');
    }
  }

  onHandleSubmit(e) {
    e.preventDefault();
    let formBody = {
      title: this.state.title,
      author: this.state.author,
      publication_year: this.state.publication_year,
      read: this.state.read
    }

    console.log('hit the submit');

    let options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formBody)
    }

    fetch(booksApi, options)
      .then(res => res.json())
      // .then(book => {
      //   return this.state.books.push(book);
      //   console.log(this.state.books);
      // })
      .then((book) => {
        this.setState((prevState) => {
          return {
            title: '',
            author: '',
            publication_year: '',
            read: false,
            books: [...prevState.books, book]
          }
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    let books = this.state.books.map((book) => (
      <Book key={book.id} title={book.title} author={book.author} publication_year={book.publication_year} read={book.read} />
    ))

    return (
      <div>
        <h1>My Favorite Books!</h1>

        <BookForm
          title={this.state.title}
          author={this.state.author}
          publication_year={this.state.publication_year}
          read={this.state.read}
          onHandleSubmit={this.onHandleSubmit}
          onInputChange={this.onInputChange}/>

        <ul>
          {books}
        </ul>
      </div>
    )
  }
}

export default Books;
