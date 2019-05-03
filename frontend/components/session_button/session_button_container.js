import { connect } from "react-redux";

import { login, logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import SessionButton from "./session_button";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  login: user =>
    dispatch(login({ email: "aliglaser@gmail.com", password: "123456789" }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButton);
