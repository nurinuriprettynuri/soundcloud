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
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome to Sound Cloud! <br />
          Please {this.props.formType} or {this.props.navLink}
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>
          {this.renderErrors()}
          <div>
            <br />
            <label>
              Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </label>
            <label>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                value={this.state.location}
                onChange={this.update("location")}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
