import React from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { fetchBooks, fetchCreateBook } from "../../store/books";

export class AllBooks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const books = this.props.books || [];
    return (
      <div>
        <p className="subtitle">Books</p>
        {books.map((book, idx) => {
          return (
            <div className="bookBox" key={idx}>
              <Link to={`/books/${book.id}`}>
                <p className="bookTitle">{book.title}</p>
              </Link>
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
    fetchBooks: (book) => dispatch(fetchBooks(book)),
    fetchCreatedBook: (book) => dispatch(fetchCreateBook(book)),
  };
};

export default connect(mapState, mapDispatchToProps)(AllBooks);
