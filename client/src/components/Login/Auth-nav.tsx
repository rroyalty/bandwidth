import React from "react";
import { withRouter } from "react-router-dom";
import AuthenticationButton from "./Authentication-button";
import "./styles.css"

const AuthNav: React.FC = ():JSX.Element => (
  <div className="login login-button">
    <AuthenticationButton />
  </div>
);

export default withRouter(AuthNav);