import React from "react";
import { connect, useSelector } from "react-redux";
import { fetchBooks, fetchCreateBook } from "../store/books";

export class AllBooks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const books = this.props.books || [];
    return (
      <div>
        {books.map((book) => {
          return (
            <div>
              <h2>{book.title}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: (book) => dispatch(fetchBooks(book)),
    createBook: (book) => dispatch(fetchCreateBook(book)),
  };
};

export default connect(mapState, mapDispatchToProps)(AllBooks);
