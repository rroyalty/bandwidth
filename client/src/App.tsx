import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Loading from './components/Loading/Loading';
import { useAuth0 } from '@auth0/auth0-react';
import LoggedInLanding from "./views/Landing/loggedInLanding"
import LoggedOutLanding from "./views/Landing/loggedOutLanding"
import NavbarLoggedIn from "./components/Navbar/NavbarLoggedIn";
import NavbarLoggedOut from "./components/Navbar/NavbarLoggedOut";

const App: React.FC = (): JSX.Element => {
  
  const { isAuthenticated, isLoading } = useAuth0();

  if ( isLoading ) {
    return <Loading />;
  }

  return (
    <Router>
        <>
          { isAuthenticated ? <NavbarLoggedIn /> : <NavbarLoggedOut /> }
          { isAuthenticated ? <LoggedInLanding /> : <LoggedOutLanding /> }
        </>
    </Router>

  );
}

export default App;

