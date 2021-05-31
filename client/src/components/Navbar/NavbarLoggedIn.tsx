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
        height: `75px`
    },
    rightAppBar: {
        marginLeft: `auto`,
        marginRight: 10

    },
    mobileNav: {
        display: `flex`,
        flexDirection: `column`,
        textDecoration: `none`,
        textTransform: `uppercase`,
        justifyContent: `flex-end`,

    },
    links: {
        margin: `5px`,
        padding: `5px`,
        color: theme.palette.primary.main,
        backgroundColor: `rgba(255,255,255,0.6)`,
        width: `100%`,
        fontSize: `1.2rem`,
        alignContent: `center`
    },
    menu: {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        height: "100vh",
        backgroundImage: `url(/menuImage.jpg)`,
        border: `0px`,
        borderLeft: `2px`,
        borderStyle: `solid`,
        borderColor: `white`,
        width: `50vw`,
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
                    <List className={classes.menu} component="nav" aria-labelledby="main navigation" >
                        <MenuItem className={classes.mobileNav}>
                            <Link className={classes.links} to="/">Profile</Link>
                            <Link className={classes.links} to="/find">Find</Link>
                        </MenuItem>
                    <AuthNav />
                    </List>
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
