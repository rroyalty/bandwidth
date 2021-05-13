import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Landing from './views/Landing/landing'
import Browse from './views/Browse/Browse'
import About from './views/About/About'
import Profile from './views/Profile/Profile'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'

import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './auth/protected-route';


import Navbar from './components/Navbar/Navbar'
import background from './detroit-punk-2.jpg'


import './App.css';


import { IconButton, Container } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//   navbarDisplayFlex: {
//     display: `flex`,
//     justifyContent: `space-between`
//   },
//   navDisplayFlex: {
//     display: `flex`,
//     justifyContent: `space-between`
//   },
//   linkText: {
//     textDecoration: `none`,
//     textTransform: `uppercase`,
//     color: `white`
//   },
//   mobileNav: {
//     display: 'flex',
//     flexDirection: 'column',
//     color: 'black'
//   }
// });


const App: React.FC = (props: any): JSX.Element => {

  const { isLoading } = useAuth0();

  if (isLoading) {
      return <Loading />;
  }

  return (
    <Router>
      <>
        <Container maxWidth='xl' className="App bg" style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: "100vh",
        }}>

        <Navbar />
        <Switch>
          <Route exact path="/index" component={Landing} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Landing} />
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
        </Container>
      </>
      
    </Router>
  
  );
}

export default App;
