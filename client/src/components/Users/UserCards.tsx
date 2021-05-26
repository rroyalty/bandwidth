import React, { useEffect } from 'react';
import { Container, createStyles, Grid, makeStyles } from '@material-ui/core';
import API from '../../utils/API'
import { useState } from 'react';
import { Theme } from '@material-ui/core/styles';


export interface UserI {
    nickName: string,
    firstName: string,
    lastName: string,
    intentionStatus: string,
    bandName: string,
    location: string,
    email: string,
    phone: string,
    blurb: string,
}
export interface IUserCardProps {
    status: string,
}
const UserCard: React.FC<IUserCardProps> = (props) => {

    const [users, setUsers] = useState<UserI[]>([])


    const dbUsers = (data: any[]) => {
        const userUser: UserI[] = data.map((dbUser) => {
            return {
                nickName: dbUser.nickName,
                firstName: dbUser.firstName,
                lastName: dbUser.lastName,
                intentionStatus: dbUser.intentionStatus,
                bandName: dbUser.bandName,
                location: dbUser.location,
                email: dbUser.email,
                phone: dbUser.phone,
                blurb: dbUser.blurb
            }
        })
        setUsers(userUser)
    }

    useEffect(() => {
        API.getAllUsers().then(res => {
            dbUsers(res.data);
        })
    }, [])

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                backgroundColor: `rgba(255, 255, 255, 0.4)`,
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
            grid: {
                backgroundColor: `rgba(255, 255, 255, 0.4)`,
                justifyContent: `center`,
                alignItems: `center`,
            },
            header: {
                backgroundColor: `rgba(255, 255, 255, 0.4)`,
                paddingTop: 100,
                paddingLeft: 50,
                justifyContent: `center`,
                alignItems: `center`,
            },
        }),
    );
    const classes = useStyles();
    return (
        <Grid
            container
            spacing={3}
            justify="center"
            alignItems="center"
        >
            {/* {props.children} */}
            <div className={classes.root}>
                <h1 className={classes.header}>Find Other Musicians</h1>
                {/* refactor - users.reduce here */}
                {users.filter((user: {intentionStatus: string}) => !props.status || user.intentionStatus === props.status).map((user) => {
                    return (
                        <Container className={classes.root} maxWidth="lg" >
                            <Grid container spacing={3}>
                                <Grid className={classes.root} item xs={12}>
                                    <h1 key={user.nickName}>{user.nickName}</h1>
                                    <h2 key={user.bandName}>{user.bandName}</h2>
                                    <p key={user.firstName}>{user.firstName} {user.lastName}</p>
                                    <p key={user.intentionStatus}>{user.intentionStatus}</p>
                                    <p key={user.location}>{user.location}</p>
                                    <p key={user.email}>{user.email}</p>
                                    <p key={user.phone}>{user.phone}</p>
                                    <p key={user.blurb}>{user.blurb}</p>
                                    <p>---------------------</p>
                                </Grid>
                            </Grid>
                        </Container>
                    )
                })}
            </div>
        </Grid>
    )
}


export default UserCard