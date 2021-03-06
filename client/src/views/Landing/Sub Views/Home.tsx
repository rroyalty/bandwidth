import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AuthNav from "../../../components/Login/Auth-nav"

import { Box, Container } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: `rgba(255, 255, 255, 0.4)`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,
        width: `80%`,
        margin: `0`,
        [theme.breakpoints.down('xs')]: {
            width: `100%`,
            maxWidth: `100%`,
        }
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
        height: `inherit`
    }
}));


const Landing: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles();
    const matches: boolean = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box className={classes.root} display='flex' flexDirection='column' alignItems='center' margin={0} padding={0}>
            <Container >
                <img className={classes.logo} src={matches ? "/fullLogo.png" : "/logo512.png"} alt="logo" />
            </Container>
            <AuthNav />
        </Box>
    )
}

export default Landing