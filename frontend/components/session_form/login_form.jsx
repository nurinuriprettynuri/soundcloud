import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserLogIn = this.demoUserLogIn.bind(this);
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
    this.props
      .processForm(user)
      .then(() => this.props.history.push("/tracks"))
      .then(() => this.props.closeModal());
  }

  demoUserLogIn() {
    this.setState({ email: "aliglaser@gmail.com", password: "123456789" });
    this.props.login(this.state);
    this.props.history.push("/tracks");
  }

  renderErrors() {
    return (
      <ul className="sessionerror">
        {this.props.errors.map((error, i) => (
          <li className="sessionerror-li" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signin-modal-form-container">
        <div className="sessionTitleDiv">
          <p className="sessionFormTitle">Welcome back</p>
        </div>
        <div className="form-div">
          <form className="sessionForm" onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <br />
            <br />
            <br />
            <br />
            <input
              type="text"
              className="textInput"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Your email address"
            />
            <br />
            <input
              type="password"
              className="textInput"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Your password"
            />
            <br />
            <input type="submit" className="submitButton" value="SIGN IN" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
