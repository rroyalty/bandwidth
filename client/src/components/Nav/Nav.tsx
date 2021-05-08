import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style.css'

// import NavSideDrawer from './NavSideDrawer';
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
    }
});

const navLinks = [
    { title: `about`, path: `/about` },
    { title: `browse band members`, path: `/bandmembers` },
    { title: `faq`, path: `/faq` },
]

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Router>
                <Toolbar className="nav-style">
                    <Container className={classes.navbarDisplayFlex}>
                        <IconButton edge="start" color="inherit" aria-label="home">
                            <Home fontSize="large" />

                        </IconButton>
                        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                            {navLinks.map(({ title, path }) => (
                                <Link to={path} key={title} className={classes.linkText}> 
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                        {/* <NavSideDrawer /> */}
                    </Container>
                </Toolbar>
            </Router>
        </AppBar>
    )
}
export default Navbar