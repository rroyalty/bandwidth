import React from 'react'
import NavbarLoggedIn from "../NavbarLoggedIn/NavbarLoggedIn"
import NavbarLoggedOut from "../NavbarLoggedOut/NavbarLoggedOut"

import { useAuth0 } from "@auth0/auth0-react";

const NavbarMenu = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <NavbarLoggedIn /> : <NavbarLoggedOut />;
  };

export default NavbarMenu
