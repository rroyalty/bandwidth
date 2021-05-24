import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Container } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TeamBioDesktop from './TeamBioDesktop'
import TeamBioMobile from './TeamBioMobile'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: `flex`,
        backgroundColor: `rgba(255, 255, 255, 0.4)`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,
        width: `80%`,
        margin: `0`,
        maxWidth: `80%`
    },
}));


const TheTeam: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles();
    const matches: boolean = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Container className={classes.root}>
            { matches ? <TeamBioDesktop /> : <TeamBioMobile /> }
        </Container>
    )
}

export default TheTeam