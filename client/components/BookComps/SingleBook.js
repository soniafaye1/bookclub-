import React from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { fetchBook } from "../../store/book";
import Reviews from "../Reviews";

export class SingleBook extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }
  render() {
    const book = this.props.book || {};
    // let { review } = this.props || [];
    return (
      <div>
        <h2>Single Book Info</h2>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <div>
          <p>{book.published_date}</p>
          <p>{book.description}</p>
        </div>

        <div>
          <Link to="/books">
            <p>Back to Home</p>
          </Link>
        </div>
        <div>
          <Reviews book={book.id} />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    book: state.book,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBook: (book) => dispatch(fetchBook(book)),
  };
};

export default connect(mapState, mapDispatchToProps)(SingleBook);
