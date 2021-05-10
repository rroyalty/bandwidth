import React from 'react';
import { BottomNavigation, AppBar, makeStyles }from '@material-ui/core'
import './style.css';

const Footer = () => {

    const useStyles = makeStyles({
        stickToBottom: {
          width: '100%',
          position: 'fixed',
          bottom: 0,
        //   might have to play with this later on to make sure this doesn't cover anything
          marginBottom: '3px',
        },
      })
      const classes = useStyles()
    return (
       <BottomNavigation className={classes.stickToBottom}>
            <AppBar className="footer" id="menuToggle" position="sticky">
           <p>hi i'm a footer</p>
           </AppBar>
       </BottomNavigation>
    )
}

export default Footer;