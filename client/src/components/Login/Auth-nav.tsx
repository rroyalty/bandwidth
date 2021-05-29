import React from "react";
import { withRouter } from "react-router-dom"
import LoginButton from "./Login-button";
import LogoutButton from "./Logout-button";

import { useAuth0 } from "@auth0/auth0-react";

const AuthNav: React.FC = ():JSX.Element => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default withRouter(AuthNav);