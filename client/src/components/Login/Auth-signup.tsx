import React from 'react'
import SignupUserButton from "../../components/Login/SignupUser-button"
import LogoutButton from "../../components/Login/Logout-button"

import { useAuth0 } from "@auth0/auth0-react";

const AuthSignup = () => {
    const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <SignupUserButton />;
};

export default AuthSignup
