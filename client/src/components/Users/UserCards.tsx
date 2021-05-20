import React, { useEffect } from 'react';
import { Container, createStyles, Grid, makeStyles } from '@material-ui/core';
import API from '../../utils/API'
import { useState } from 'react';

export interface UserI {
    nickName: string,
    firstName: string,
    lastName: string,
    intentionStatus: string,
    location: string,
    email: string,
    phone: string,
    blurb: string,
}

const UserCard = () => {

    const [users, setUsers] = useState<UserI[]>([])


    const dbUsers = (data: any[]) => {
        const userUser: UserI[] = data.map((dbUser) => {
            return {
                nickName: dbUser.nickName,
                firstName: dbUser.firstName,
                lastName: dbUser.lastName,
                intentionStatus: dbUser.intentionStatus,
                location: dbUser.location,
                email: dbUser.email,
                phone: dbUser.phone,
                blurb: dbUser.blurb
            }
        })
        setUsers(userUser)
    }

    useEffect(() => {
        API.getUsers().then(res => {
            console.log(res.data)
            dbUsers(res.data);
        })
    }, [])

    const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: 'rgba(255, 255, 255, 0.7)'
    //   background-color: 'rgba(255, 255, 255, 0.7)',
    //   padding-top: '5rem',
    //   align-items: 'center',
    //   text-align: 'center',
    },
  }),
);
const classes = useStyles();
    return (
        <Grid
        container
        spacing={3}
  direction="row"
  justify="center"
  alignItems="center"
  >

            {users.map((user) => {
                return (
                    <Container className={classes.paper} maxWidth="xs" >
                        {/* <div> */}
                        <h1 key={user.nickName}>{user.nickName}</h1>
                        <p key={user.firstName}>{user.firstName} {user.lastName}</p>
                        <p key={user.intentionStatus}>{user.intentionStatus}</p>
                        <p key={user.location}>{user.location}</p>
                        <p key={user.email}>{user.email}</p>
                        <p key={user.phone}>{user.phone}</p>
                        <p key={user.blurb}>{user.blurb}</p>
                        <p>---------------------</p>
                        {/* </div> */}
                    </Container>
                )
            })}
        </Grid>
    )
}

export default UserCard