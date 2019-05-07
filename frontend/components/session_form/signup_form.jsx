import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      location: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="modal-form-container">
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div>
            <br />
            <input
              className="textInput"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Your email address"
            />
            <br />
            <input
              className="textInput"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Your username"
            />
            <br />
            <input
              className="textInput"
              type="text"
              value={this.state.location}
              onChange={this.update("location")}
              placeholder="Your location"
            />
            <br />
            <input
              className="textInput"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Your Password"
            />
            <br />
            <input
              type="submit"
              value={this.props.formType}
              className="submitButton"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
