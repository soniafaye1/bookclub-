import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../store/user";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const username = this.props.match.params.username;
    this.props.setUser(username);
  }

  render() {
    const user = this.props.user || {};
    return (
      <div>
        <h2>Profile</h2>
        <p>{user.username}</p>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (username) => dispatch(fetchUser(username)),
  };
};

export default connect(mapState, mapDispatchToProps)(Profile);
