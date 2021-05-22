import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Loading from './components/Loading/Loading';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar/Navbar';
import LoggedInLanding from "./views/Landing/loggedInLanding"
import LoggedOutLanding from "./views/Landing/loggedOutLanding"

const App: React.FC = (): JSX.Element => {
  
  const { isAuthenticated, isLoading } = useAuth0();

  if ( isLoading ) {
    return <Loading />;
  }

  return (
    <Router>
        <>
          <Navbar />
          { isAuthenticated ? <LoggedInLanding /> : <LoggedOutLanding /> }
        </>
    </Router>

  );
}

export default App;


// import { Theme } from '@material-ui/core/styles/createMuiTheme';
// import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

// declare module '@material-ui/core/styles/createMuiTheme' {
//   interface Theme {
//     appDrawer: {
//       width: React.CSSProperties['width']
//       breakpoint: Breakpoint
//     }
//   }
//   // allow configuration using `createMuiTheme`
//   interface ThemeOptions {
//     appDrawer?: {
//       width?: React.CSSProperties['width']
//       breakpoint?: Breakpoint
//     }
//   }
// }