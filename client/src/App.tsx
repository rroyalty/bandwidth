import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Landing from './views/Landing/landing'
import Browse from './views/Browse/Browse'
import FAQ from './views/faq/Faq'
import About from './views/About/About'
import Footer from './components/Footer/Footer'
import AuthNav from "./components/Login/Auth-nav";
import './App.css';


import { IconButton, Container } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar } from "@material-ui/core";

function App(props: any) {
  const useStyles = makeStyles({
    navbarDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    },
    mobileNav: {
      display: 'flex',
      flexDirection: 'column',
      color: 'black'
    }
  });
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <AppBar id="menuToggle" position="static">
          <Toolbar className="nav-style">
            <Container className={classes.navbarDisplayFlex}>
              <NavLink to='/'> <IconButton className="nav-button" edge="start" color="inherit" aria-label="home">
                <Home fontSize="large" />

              </IconButton>
              </NavLink>
              <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} id="mobileFlex" >
                <NavLink to="/" className="linkText"><ListItemText>Home</ListItemText> </NavLink>
                <NavLink to="/about" className="linkText"><ListItemText>About</ListItemText> </NavLink>
                <NavLink to="/browse" className="linkText"><ListItemText>Browse</ListItemText> </NavLink>
                <NavLink to="/faq" className="linkText"><ListItemText>FAQ</ListItemText> </NavLink>
                <AuthNav />
              </List>
            </Container>
          </Toolbar>
        </AppBar>

        <Route path="/" exact render={() => <Landing />} />
        <Route path="/browse" exact render={() => <Browse />} />
        <Route path="/faq" exact render={() => <FAQ />} />
        <Route path="/about" exact render={() => <About />} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
