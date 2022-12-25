import React from "react";
import { connect } from "react-redux";

export class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      username: "",
      email: "",
      bio: "",
    };
  }

  handleSubmit() {}

  render() {
    return (
      <div>
        <form onSubmit={handleSubmit}></form>
      </div>
    );
  }
}

export default connect(EditProfile);
