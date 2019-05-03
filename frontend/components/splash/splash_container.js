import { connect } from "react-redux";
import Splash from "./splash";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

export default connect(mapStateToProps)(Splash);
