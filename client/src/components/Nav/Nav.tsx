import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style.css'

import Browse from '../../views/Browse/Browse'
import Faq from '../../views/faq/Faq'
import Landing from '../../views/Landing/landing'
import About from '../../views/About/About'

import { IconButton, Container } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


import { AppBar, Toolbar } from "@material-ui/core";

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

const navLinks = [
    { title: `about`, path: `/about` },
    { title: `browse`, path: `/browse` },
    { title: `faq`, path: `/faq` },
]

const Navbar = () => {
  
    const classes = useStyles();
 
    return (
            <Router>
        <AppBar id="menuToggle" position="static">
                <Toolbar  className="nav-style">
                    <Container className={classes.navbarDisplayFlex}>
                    <Link to='/'> <IconButton edge="start" color="inherit" aria-label="home">
                            <Home fontSize="large" />
                            
                        </IconButton>
                        </Link>
                        <List  component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} id="mobileFlex" >
                            {navLinks.map(({ title, path }) => (
                                <Link to={path} key={title} className={classes.linkText}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                     
                    </Container>
                </Toolbar>
        </AppBar>
        {/* comment this line out and the Landing goes away on ALL pages  */}
                 <Route path="/" render={() => <Landing />} />
                 {/* <Route path="/" render={() => <App />} */}
                 <Route path="/browse" render={() => <Browse />} />
                 <Route path="/faq" render={() => <Faq />} />
                 <Route path="/about" render={() => <About />} />
            </Router>
    )
}
export default Navbar
