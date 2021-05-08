
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

import { Container } from "@material-ui/core";
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
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
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default function MobileNav(props: Props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List id="mobileFlex" >
                {['About', 'Browse', 'FAQ'].map((text, index) => (
                    <ListItem button key={text}>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    const navLinks = [
        { title: `about`, path: `/about` },
        { title: `browse band members`, path: `/bandmembers` },
        { title: `faq`, path: `/faq` },
    ]

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} >
                <Router>
                    <Toolbar className="nav-style">
                        <Container className={classes.navbarDisplayFlex}>
                            <IconButton
                                color="inherit"
                                aria-label="home"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                                    {navLinks.map(({ title, path }) => (
                                        <Link to={path} key={title} className={classes.linkText}>
                                            <ListItem button>
                                                <ListItemText primary={title} />
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>

                                    <MenuIcon />
                            </IconButton>
                         <Typography variant="h6" noWrap>
                                Bandwidth
                         </Typography>
                
                        </Container>
                    </Toolbar>
                </Router>
            </AppBar>
           
            <nav className={classes.drawer} aria-label="nav-links">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
}

