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

  render() {
    return (
      <div>
        <h3>Add a new book!</h3>

        <div className="row col-md-6 offset-md-3">
          <form onSubmit={this.props.onHandleSubmit}>
            <div className="form-group">
              <label htmlFor="title">title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={this.props.title}
                onChange={this.props.onInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="author">author</label>
              <input
                type="text"
                name="author"
                id="author"
                className="form-control"
                value={this.props.author}
                onChange={this.props.onInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="publication_year">publication year</label>
              <input
                type="text"
                name="publication_year"
                id="publication_year"
                className="form-control"
                value={this.props.publication_year}
                onChange={this.props.onInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="read">have you read it?</label>
              <input
                type="text"
                name="read"
                id="read"
                className="form-control"
                value={this.props.read}
                onChange={this.props.onInputChange} />
            </div>
            <input type="submit" value="submit" className="btn btn-outline-dark"/>
          </form>
        </div>
      </div>
    )
  }
}

export default BookForm;
