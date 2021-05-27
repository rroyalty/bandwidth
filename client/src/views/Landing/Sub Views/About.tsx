import React from 'react';

import { Box, Container, Paper, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Hidden } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MusicNoteIcon from '@material-ui/icons/MusicNote';



const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: `flex`,
        backgroundColor: `rgba(255, 255, 255, 0.4)`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,
        width: `80%`,
        margin: `0`,
        maxWidth: `80%`,
        [theme.breakpoints.down('xs')]: {
            width: `100%`,
            maxWidth: `100%`,
        }
    },
    grid: {
        height: `auto`,
        justifyContent: `center`,
        alignItems: `center`,
        display: `flex`,
    },
    paper: {
        display: `flex`,
        flexDirection: `column`,
        height: "auto",
        width: `90%`,
        backgroundColor: `rgba(255, 255, 255, 0.5)`,
        border: `3px`,
        borderStyle: `solid`,
        borderColor: theme.palette.primary.main,
    },
    typography: {
        display: `flex`,
        color: theme.palette.primary.main,
        [theme.breakpoints.down('lg')]: {
            fontSize: `1rem`
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: `.75rem`
        }
    }
}));

// Make more Fluid
const About: React.FC = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid className={classes.grid} container item xs={12} spacing={3}>
                <Hidden smDown>
                    <Grid className={classes.grid} item xs={12} md={6}>
                        <img src="/nh-band-map.png" alt="New Hampshire Map" />
                    </Grid>
                </Hidden>
                <Grid className={classes.grid} item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.typography} style={{padding: `15px`}}>
                            Do you have an instrument collecting dust in your closet? Do you miss the days of rockin' out in the garage with your pals? Are you tired of your mother telling you to get a real job? Do you need to prove to your ex-spouse that you are, in fact, a real musician?{`\n`}
                        </Typography>
                        <Typography className={classes.typography} style={{padding: `15px`}}>
                            Fret no more... here at Bandwidth you can:
                        </Typography>
                        <List dense={true}>
                            <ListItem dense>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText classes={{primary:classes.typography}}
                                    primary="Create a profile to showcase your talents!"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText classes={{primary:classes.typography}}
                                    primary="Search for other musicians in your area! <Future Dev>"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText classes={{primary:classes.typography}}
                                    primary="Live chat with your connections! <Future Dev>"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText classes={{primary:classes.typography}}
                                    primary="Filter musicians by preferred genres and instruments!"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText classes={{primary:classes.typography}}
                                    primary="Form bands and book gigs at local venues! <Future Dev>"
                                />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    )
}

export default About