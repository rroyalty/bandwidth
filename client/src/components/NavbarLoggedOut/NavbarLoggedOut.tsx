import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as Scroll } from "react-scroll";
import { withRouter } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import AuthNav from "../../components/Login/Auth-nav";
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
        justifyContent: `center`
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
    { title: `Home`, path: `landing` },
    { title: `About`, path: `about` },
    { title: `The Team`, path: `theteam` }
]

const NavbarLoggedOut: React.FC = (): JSX.Element => {
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
                            <ScrollLink to="landing">Home</ScrollLink>
                            <ScrollLink to="about">about</ScrollLink>
                            <ScrollLink to="theteam">The Team</ScrollLink>
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
                            <ScrollLink smooth={true} duration={500} to={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </ScrollLink>
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

export default withRouter(NavbarLoggedOut)
