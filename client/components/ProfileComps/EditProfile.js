import React from "react";
import { connect } from "react-redux";
import { fetchEditedUser, fetchUser } from "../../store/user";

export class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      username: "",
      email: "",
      bio: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editUser({ ...this.state });
  }

  render() {
    return (
      <div>
        <h2>Account Information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input name="name" onChange={handleChange} value={name} />
          </div>

          <div>
            <label htmlFor="username">Username: </label>
            <input name="username" onChange={handleChange} value={username} />
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input name="email" onChange={handleChange} value={email} />
          </div>

          <div>
            <label htmlFor="bio">Bio: </label>
            <input name="bio" onChange={handleChange} value={bio} />
          </div>

          <div>
            <button type="submit">Update</button>
          </div>
        </form>
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
    editUser: (user) => dispatch(fetchEditedUser(user)),
  };
};

export default connect(mapState, mapDispatchToProps)(EditProfile);
