import axios from "axios";

const GET_REVIEWS = "GET_REVIEWS";
const CREATE_REVIEW = "CREATE_REVIEW";

const setReview = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

const createReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review,
  };
};

export const fetchReview = () => {
  return async (dispatch) => {
    try {
      const { data: review } = await axios.get("/api/reviews");
      dispatch(setReview(review));
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchCreateReview = (review) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post("/api/reviews", review);
      dispatch(createReview(created));
    } catch (err) {
      console.error(err);
    }
  };
};

//reducer
export default function reviewReducer(state = [], action) {
  switch (action.type) {
    case CREATE_REVIEW:
      return [...state, action.review];
    case GET_REVIEWS:
      return action.review;
    default:
      return state;
  }
}
