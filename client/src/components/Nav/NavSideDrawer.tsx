import React from 'react';
import { useState } from 'react'
import { IconButton, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";


const useStyles = makeStyles({
    list: {
        width: 250
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`
    }
});
const SideDrawer = (navLinks: any) => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false })
    const toggleDrawer = (anchor: string, open: boolean) => (event: { type: string; key: string; }) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setState({ [anchor]: "right", right: true })
    }
    const sideDrawerList = (anchor: string) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={() => toggleDrawer(anchor, false)}
            onKeyDown={() => toggleDrawer(anchor, false)}
        >
            <List component="nav">
                {navLinks.map((navLink:any) => (
                    <a href={navLink.path} key={navLink.title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={navLink.title} />
                        </ListItem>
                    </a>
                ))}
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <IconButton
                edge="start"
                aria-label="delete"
                onClick={() => toggleDrawer("right", true)}
            >
                <Menu fontSize="large" style={{ color: `white` }} />
            </IconButton>

            <Drawer
                anchor="right"
                open={state.right}
                onClick={() => toggleDrawer("right", true)}
                onClose={() => toggleDrawer("right", false)}
            >
                {sideDrawerList("right")}
            </Drawer>
        </React.Fragment>
    );
};
export default SideDrawer