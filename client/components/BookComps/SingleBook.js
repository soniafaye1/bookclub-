import React from "react";
import { connect, useSelector } from "react-redux";
import { fetchBook } from "../../store/book";

export class SingleBook extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }
  render() {
    const book = this.props.book || {};
    return (
      <div>
        <h2>Single Book Info</h2>
        <p>{book.title}</p>
        <p>{book.author}</p>
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
