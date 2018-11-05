import React, { Component } from 'react';

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      publication_year: '',
      read: false
    }
  }

  onInputChange(e) {
    console.log('target name ', e.target.name)
    console.log('target value ', e.target.value)
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

  render() {
    return (
      <div>
        <h3>Add a new book!</h3>

        <form onSubmit={e => this.onHandleSubmit(e)}>
          <div>
            <label htmlFor="title">title</label>
            <input type="text" name="title" id="title" value={this.state.title} onChange={e => this.onInputChange(e)} />
          </div>
          <div>
            <label htmlFor="author">author</label>
            <input type="text" name="author" id="author" value={this.state.author} onChange={e => this.onInputChange(e)} />
          </div>
          <div>
            <label htmlFor="publication_year">publication year</label>
            <input type="text" name="publication_year" id="publication_year" value={this.state.publication_year} onChange={e => this.onInputChange(e)} />
          </div>
          <div>
            <label htmlFor="read">have you read it?</label>
            <input type="text" name="read" id="read" value={this.state.read} onChange={e => this.onInputChange(e)} />
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default BookForm;
