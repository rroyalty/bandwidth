import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import fullLogo from '../../fullLogo.png';
import smallLogo from '../../logo512.png';
import './style.css';

import { Button, Box } from "@material-ui/core"

const Landing: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const matches: boolean = useMediaQuery(theme.breakpoints.up('sm'));
    return(
        <Box className='landing bg' display='flex' flexDirection='column' alignItems='center' margin={5}>
            <img src={matches ? fullLogo : smallLogo } className="App-logo" alt="logo"/>
            <Button variant="contained">
                Sign In
            </Button>
            <Button variant="contained">
                Sign Up
            </Button>
        </Box>
    )
}

export default Landing