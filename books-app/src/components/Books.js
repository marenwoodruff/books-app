import React, { Component } from 'react';
import Book from './Book';

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
      .then(book => {
        this.setState((prevState) => {
          return {
            books: [...prevState.books, book],
            title: '',
            author: '',
            publication_year: '',
            read: false
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

        <h3>Add a new book!</h3>

        <div className="row col-md-6 offset-md-3">
          <form onSubmit={e => this.onHandleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="title">title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={this.state.title}
                onChange={e => this.onInputChange(e)} />
            </div>
            <div className="form-group">
              <label htmlFor="author">author</label>
              <input
                type="text"
                name="author"
                id="author"
                className="form-control"
                value={this.state.author}
                onChange={e => this.onInputChange(e)} />
            </div>
            <div className="form-group">
              <label htmlFor="publication_year">publication year</label>
              <input
                type="text"
                name="publication_year"
                id="publication_year"
                className="form-control"
                value={this.state.publication_year}
                onChange={e => this.onInputChange(e)} />
            </div>
            <div className="form-group">
              <label htmlFor="read">have you read it?</label>
              <input
                type="text"
                name="read"
                id="read"
                className="form-control"
                value={this.state.read}
                onChange={e => this.onInputChange(e)} />
            </div>
            <input type="submit" value="submit" className="btn btn-outline-dark"/>
          </form>
        </div>

        <ul>
          {books}
        </ul>
      </div>
    )
  }
}

export default Books;
