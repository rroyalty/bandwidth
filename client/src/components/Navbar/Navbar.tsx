import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'

import { Drawer, List, ListItem, ListItemText } from "@material-ui/core"

import { AppBar, Toolbar, MenuItem } from "@material-ui/core"

import navbarStyles from './navbarStyles'

const navLinks: { title: string, path: string }[] = [
    { title: `Home`, path: `/` },
    { title: `About`, path: `/about` },
    { title: `Browse`, path: `/browse` },
    { title: `faq`, path: `/faq` }
]

const Navbar: React.FC = (): JSX.Element => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    })
    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 600
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }))
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness())
    }, [])

    const classes = navbarStyles();

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        const getDrawerChoices = () => {
            return (
                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                {navLinks.map(({ title, path }) => (
                    <Link to={path} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                        <MenuItem>{navLinks}</MenuItem>
                    </Link>
                ))}
            </List>
            )
        }
        return (
            <AppBar position="static" className={classes.navbar}>
                <IconButton
                    {...{
                        edge: 'start',
                        color: 'inherit',
                        'aria-label': 'menu',
                        'aria-haspopup': 'true',
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                {...{
                    anchor: 'right',
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                }}>
                    <div>{getDrawerChoices()}</div>
                </Drawer>
            </AppBar>
        )
    }
    return (
        <AppBar position="static" className={classes.navbar}>
            {mobileView ? displayMobile() : Navbar }
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

            </section>
        </AppBar>
    )
}

export default withRouter(Navbar)
