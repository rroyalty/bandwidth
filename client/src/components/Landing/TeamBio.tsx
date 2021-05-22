import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, Paper, Container, Avatar, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import theTeam from "/devTeam"

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        justifyContent: `center`,
        alignItems: `center`,
        margin: `0`,
    },
    container: {
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,
    },
    grid: {
        justifyContent: `center`,
        alignItems: `center`,
        '& container': {

        }
    },
    avatar: {
        height: "150px",
        width: "150px"
    },
    font: {
        fontSize: "24px",
        color: '#181D27'
    }
}));

const TeamBio: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid className={classes.grid} container item xs={12} spacing={3}>
                <Typography className={classes.font}>Bandwidth brought to you by...</Typography>
            </Grid>
            <Grid className={classes.grid} container item xs={12} spacing={3}>

            </Grid>
        </Container>)
};

export default TeamBio;
