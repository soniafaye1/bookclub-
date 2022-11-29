import React from "react";
import { connect } from "react-redux";
import AllBooks from "./BookComps/AllBooks";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div>
      <h2>Welcome, {username}</h2>
      <AllBooks />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
