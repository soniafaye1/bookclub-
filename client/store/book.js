import axios from "axios";

const SET_BOOK = "SET_BOOK";

const setBook = (book) => {
  return {
    type: SET_BOOK,
    book,
  };
};

export const fetchBook = (id) => {
  return async (dispatch) => {
    try {
      const { data: book } = await axios.get(`/api/books/${id}`);
      dispatch(setBook(book));
    } catch (err) {
      console.error(err);
    }
  };
};

export default function bookReducer(state = {}, action) {
  switch (action.type) {
    case SET_BOOK:
      return action.book;
    default:
      return state;
  }
}
