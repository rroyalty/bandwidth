import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, Paper, Container, Avatar, Typography } from "@material-ui/core"
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
    grid: {
        justifyContent: `center`,
        alignItems: `center`,
    },
    avatar: {
        height: "150px",
        width: "150px"
    }
}));


const TheTeam: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Box className={classes.root} display='flex' flexDirection='column' alignItems='center' margin={0} padding={0}>
            <Container className={classes.container}>
                <Typography>THE TEAM!</Typography>
                <Grid className={classes.grid} container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4}>
                            <Avatar className={classes.avatar} alt="Ryan Royalty" src="/theteam/ryan-pic.jpg" />
                        </Grid>
                        <Grid item xs={8}>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={8}>
                        </Grid>
                        <Grid item xs={4}>
                            <Avatar className={classes.avatar} alt="Ryan Royalty" src="/theteam/ryan-pic.jpg" />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4}>
                            <Avatar className={classes.avatar} alt="Ryan Royalty" src="/theteam/ryan-pic.jpg" />
                        </Grid>
                        <Grid item xs={8}>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={8}>
                        </Grid>
                        <Grid item xs={4}>
                            <Avatar className={classes.avatar} alt="Ryan Royalty" src="/theteam/ryan-pic.jpg" />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4}>
                            <Avatar className={classes.avatar} alt="Ryan Royalty" src="/theteam/ryan-pic.jpg" />
                        </Grid>
                        <Grid item xs={8}>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default TheTeam