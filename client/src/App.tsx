import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from './views/Landing/landing'
import Browse from './views/Browse/Browse'
import FAQ from './views/faq/Faq'
import About from './views/About/About'
import Footer from './components/Footer/Footer'
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
              <Link to='/'> <IconButton className="nav-button" edge="start" color="inherit" aria-label="home">
                <Home fontSize="large" />

              </IconButton>
              </Link>
              <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} id="mobileFlex" >
                <Link to="/" className="linkText"><ListItemText>Home </ListItemText> </Link>
                <Link to="/browse" className="linkText"><ListItemText> Browse </ListItemText> </Link>
                <Link to="/about" className="linkText"><ListItemText> About </ListItemText> </Link>
                <Link to="/faq" className="linkText"><ListItemText> FAQ </ListItemText> </Link>
                <ListItem button>

                </ListItem>


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
