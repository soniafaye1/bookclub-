import React from "react";
import { connect } from "react-redux";

export class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReview(this.props.match.params.id);
  }

  render() {
    const review = this.props.review || {};
    return (
      <div>
        <h3>Reviews</h3>
        <p>{review.content}</p>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    review: state.review,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReview: (review) => dispatch(fetchReview(review)),
  };
};

export default connect(mapState)(Reviews);
