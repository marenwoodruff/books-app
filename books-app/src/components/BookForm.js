import React from 'react';

const BookForm = (props) => {
    return (
      <div>
        <h3>Add a new book!</h3>

        <div className="row col-md-6 offset-md-3">
          <form onSubmit={props.onHandleSubmit}>
            <div className="form-group">
              <label htmlFor="title">title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={props.title}
                onChange={props.onInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="author">author</label>
              <input
                type="text"
                name="author"
                id="author"
                className="form-control"
                value={props.author}
                onChange={props.onInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="publication_year">publication year</label>
              <input
                type="text"
                name="publication_year"
                id="publication_year"
                className="form-control"
                value={props.publication_year}
                onChange={props.onInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="read">have you read it?</label>
              <input
                type="text"
                name="read"
                id="read"
                className="form-control"
                value={props.read}
                onChange={props.onInputChange} />
            </div>
            <input type="submit" value="submit" className="btn btn-outline-dark"/>
          </form>
        </div>
      </div>
    )
}

export default BookForm;
