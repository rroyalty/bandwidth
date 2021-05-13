import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import AuthNav from "../../components/Login/Auth-nav";

import { List, ListItem, ListItemText } from "@material-ui/core"

import { AppBar, Toolbar } from "@material-ui/core"

import navbarStyles from './navbarStyles'

const navLinks: { title: string, path: string }[] = [
    { title: `Home`, path: `/` },
    { title: `About`, path: `/about` },
    { title: `Browse`, path: `/browse` },
    { title: `faq`, path: `/faq` },
    { title: `Profile`, path: `/profile`}
]

const Navbar: React.FC = (): JSX.Element => {
    const classes = navbarStyles();

    return (
        <AppBar position="static" className={classes.navbar}>
                <section className={classes.rightAppBar}>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                        {navLinks.map(({ title, path }) => (
                            <Link to={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <AuthNav />
                </section>
        </AppBar>
    )
}

export default withRouter(Navbar)
