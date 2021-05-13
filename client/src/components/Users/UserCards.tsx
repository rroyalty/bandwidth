import React from 'react';
import { Container } from '@material-ui/core';

const UserCard = () => {
    return(
        <Container className="bg">
            <h1>Name</h1>
            <p>photohere</p>
            <p>Status</p>
            <p>City </p>
            <p>State</p>
            <p>Instrument</p>
            <p>Genre</p>
        </Container>
    )
}

export default UserCard