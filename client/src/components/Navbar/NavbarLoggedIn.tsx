import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import AuthNav from "../Login/Auth-nav";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { Drawer, List, ListItem, ListItemText } from "@material-ui/core"

import { AppBar, MenuItem } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => createStyles({
    navDisplayFlex: {
        display: `inline-flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`,
        justifyContent: `center`,
        "&:hover": {
            color: theme.palette.secondary.main
        }
        
    },
    navbar: {
        backgroundColor: `#181D27`,
        borderBottomWidth: `2px`,
        borderLeftWidth: `2px`,
        borderRightWidth: `2px`,
        borderColor: `#181D27`,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        border: `solid`,
        // maxWidth: '95vw',
        // marginLeft: -24
    },
    iconLinks: {
        display: `inline-flex`,
        height: `48px`,
        width: `48px`,

    },
    rightAppBar: {
        marginLeft: `auto`,
        marginRight: 10

    },
    justifyContent: {
        display: `flex`,
        // flexDirection: `column`,
        justifyContent: `center`
    },
    mobileNav: {
        // backgroundColor: `#181D27`,
        display: `flex`,
        flexDirection: `column`,
        textDecoration: `none`,
        textTransform: `uppercase`,
        // color: `#fff !important`,
        justifyContent: `flex-end`,
        // justifyContent: `center`
    }
}));


const navLinks: { title: string, path: string }[] = [
    { title: `Profile`, path: `/` },
    { title: `Find`, path: `/find` }
]

const NavbarLoggedIn: React.FC = (): JSX.Element => {
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

    const classes = useStyles();

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <AppBar position="fixed" className={classes.navbar}>
                <IconButton
                    {...{
                        edge: 'start',
                        color: 'inherit',
                        'aria-label': 'menu',
                        'aria-haspopup': 'true',
                        onClick: handleDrawerOpen,

                    }}
                    className={classes.mobileNav}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    {...{
                        anchor: 'right',
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                        // className: classes.mobileNav
                    }}>
                    <List component="nav" aria-labelledby="main navigation" className={classes.mobileNav}>
                        <MenuItem className={classes.mobileNav}>
                            <Link to="/">Profile</Link>
                            <Link to="/find">Find</Link>
                        </MenuItem>
                    </List>
                    <AuthNav />
                </Drawer>
            </AppBar>
        )
    }

    const displayDesktop = () => {
        return (
            <AppBar position="fixed" className={classes.navbar}>
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


    return (
        <div>
            {mobileView ? displayMobile() : displayDesktop()}
        </div>
    )
}

export default withRouter(NavbarLoggedIn)
