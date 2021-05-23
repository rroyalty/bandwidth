import React from 'react';

import { Box, Container, Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: `rgba(255, 255, 255, 0.4)`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,
        width: `80%`,
        margin: `0`,
    },
    container: {
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,  
    },
    button: {
        width: `300px`,
        backgroundColor: theme.palette.primary.main,
        color: `#fff`,
        margin: `.05rem`
    },
    logo: {
        display: `flex`,
        width: `inherit`,
        height: `inherit`,
        margin: `50px`
    },
    grid: {
        justifyContent: `center`,
        alignItems: `center`,
        display: `flex`,
        height: `100vh`,  
    }
}));


const About: React.FC = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box className={classes.root} display='flex' flexDirection='column' alignItems='center' margin={0} padding={0}>
            <Grid className={classes.grid} container item xs={12} spacing={3}>
                <Grid className={classes.grid} item xs={12} md={6} spacing={3}>
                        <img className={classes.logo} src="/nh-band-map.png" alt="New Hampshire Map" />
                </Grid>
                <Grid className={classes.grid} item xs={12} md={6} spacing={3}>

                </Grid>
            </Grid>
        </Box>
    )
}

export default About