import axios from "axios";

//action type
const GET_BOOKS = "GET_BOOKS";
const CREATE_BOOK = "CREATE_BOOK";

//action creator
const setBooks = (books) => {
  return {
    type: GET_BOOKS,
    books,
  };
};

const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    book,
  };
};

//thunks
export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const { data: books } = await axios.get("/api/books");
      dispatch(setBooks(books));
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchCreateBook = (book) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post("/api/books", book);
      dispatch(createBook(created));
    } catch (err) {
      console.error(err);
    }
  };
};

//reducer
export default function bookReducer(state = [], action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case GET_BOOKS:
      return action.books;
    default:
      return state;
  }
}
