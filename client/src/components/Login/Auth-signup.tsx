import LogoutButton from "../../components/Login/Logout-button"
import AuthNav from "../../components/Login/Auth-nav";

import { useAuth0 } from "@auth0/auth0-react";

const AuthSignup = () => {
    const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <AuthNav />;
};

export default AuthSignup
