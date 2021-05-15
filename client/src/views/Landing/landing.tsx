import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import fullLogo from '../../fullLogo.png';
import smallLogo from '../../logo512.png';
import './style.css';
import AuthNav from "../../components/Login/Auth-nav";
import SignupButton from "../../components/Login/Signup-button"

import { Button, Box, Container } from "@material-ui/core"

const Landing: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const matches: boolean = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box className='landing bg' display='flex' flexDirection='column' alignItems='center' margin={5}>
            <Container >
                <img className='logoText' src={matches ? fullLogo : smallLogo} alt="logo" />
            </Container>
            <SignupButton />
            <AuthNav />

        </Box>
    )
}

export default Landing