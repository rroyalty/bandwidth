
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, Paper, Container, Avatar, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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

const PicLeftBioRight: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid className={classes.grid} container item xs={12} spacing={3}>
            <Grid className={classes.grid} item xs={4}>
                <Avatar className={classes.avatar} alt="Ryan Royalty" src="/theteam/ryan-pic.jpg" />
            </Grid>
            <Grid item xs={8}>
                <Paper>
                    <Typography>
                        Ryan is an awesome dude!
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
};

export default PicLeftBioRight;
