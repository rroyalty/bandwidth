import React from 'react';

import { Box, Container, Paper, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
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
    },
    logo: {
        display: `flex`,
        width: `inherit`,
        height: `1`,
    },
    grid: {
        justifyContent: `center`,
        alignItems: `center`,
        display: `flex`,
    },
    paper: {
        height: "auto",
        width: `90%`,
        backgroundColor: `rgba(255, 255, 255, 0.5)`,
        border: `3px`,
        borderStyle: `solid`,
        borderColor: theme.palette.primary.main,
    },
    typography: {
        padding: `15px`,
        fontSize: `20px`,
        color: theme.palette.primary.main
    },
}));


const About: React.FC = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid className={classes.grid} container item xs={12} spacing={3}>
                <Grid className={classes.grid} item xs={12} md={6}>
                    <img className={classes.logo} src="/nh-band-map.png" alt="New Hampshire Map" />
                </Grid>
                <Grid className={classes.grid} item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.typography}>
                            Do you have an instrument collecting dust in your closet? Do you miss the days of rockin' out in the garage with your pals? Are you tired of your mother telling you to get a real job? Do you need to prove to your ex-spouse that you are, in fact, a real musician?{`\n`}
                        </Typography>
                        <Typography className={classes.typography}>
                            Fret no more... here at Bandwidth you can:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Create a profile to showcase your talents!"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Search for other musicians in your area! <Future Dev>"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Live chat with your connections! <Future Dev>"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Filter musicians by preferred genres and instruments!"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Form bands and book gigs at local venues! <Future Dev>"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Network with musical people around the world!"
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