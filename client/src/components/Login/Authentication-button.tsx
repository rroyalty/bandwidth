import React from "react";
import { withRouter } from "react-router-dom"
import LoginButton from "./Login-button";
import LogoutButton from "./Logout-button";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton: React.FC = ():JSX.Element => {
  
  console.log(useAuth0())
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated)
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default withRouter(AuthenticationButton);