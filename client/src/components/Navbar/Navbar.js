import React from "react";
import auth0Client from "../../utils/Auth";

class Navbar extends React.Component {
  state = {
    anchorEl: null,
  };

  // handle opening and closing of dropdown
  handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    // setAnchorEl(null);
    this.setState({ anchorEl: null });
  };

  signOut = () => {
    auth0Client.signOut();
  };

  goToProfile = () => {
    window.location.href = "/profile";
  };

  render() {
    return <div></div>;
  }
}

export default Navbar;
