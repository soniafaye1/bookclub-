import axios from "axios";

const GET_USERBOOK = "GET_USERBOOK";

const getUserBook = (userBook) => {
  return {
    type: GET_USERBOOK,
    userBook,
  };
};

export const fetchUserBook = (userBook) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/userBook");
    } catch (err) {
      return err;
    }
  };
};
