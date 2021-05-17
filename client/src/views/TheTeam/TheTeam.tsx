import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, Paper, Container, Avatar, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TeamBio from '../../components/TeamBio/TeamBio'

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
    grid: {
        justifyContent: `center`,
        alignItems: `center`,
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


const TheTeam: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Box className={classes.root} display='flex' flexDirection='column' alignItems='center' margin={0} padding={0}>
            <Typography className={classes.font}>Bandwidth brought to you by...</Typography>
            <Grid className={classes.grid} container spacing={1}>
                <TeamBio />
            </Grid>
        </Box>
    )
}

export default TheTeam