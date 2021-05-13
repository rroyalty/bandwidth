import React from 'react';
import { Link } from "react-router-dom";
import {  List, ListItem, ListItemText, BottomNavigation, AppBar, makeStyles }from '@material-ui/core'
import footerStyles from './footerStyles'

import './style.css';

const Footer = () => {
  
  const navLinks: { title: string, path: string }[] = [
    // { title: `Home`, path: `/` },
    { title: `About`, path: `/about` },
    { title: `Browse`, path: `/browse` },
    { title: `faq`, path: `/faq` }
  ]

   
      const classes = footerStyles()
    return (
       <BottomNavigation className={classes.stickToBottom}>
            <AppBar className="footer" id="menuToggle" position="sticky">
            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                        {navLinks.map(({ title, path }) => (
                            <Link to={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
           </AppBar>
       </BottomNavigation>
    )
}

export default Footer;