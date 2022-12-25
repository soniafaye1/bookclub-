import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../store/user";
import EditProfile from "./EditProfile";

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

        <div>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
        </div>

        {/* <EditProfile /> */}

        <div>
          <Link to="/home">
            <p>Back to Home</p>
          </Link>
        </div>
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
