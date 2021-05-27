import React, { useEffect } from 'react';
import { Container, createStyles, Grid, makeStyles, Paper } from '@material-ui/core';
import API from '../../utils/API'
import { useState } from 'react';
import { Theme } from '@material-ui/core/styles';


export interface UserI {
    nickName: string,
    image: string,
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
                image: dbUser.image,
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
                justifyContent: 'center',
                textAlign: 'center',
            },
            paper: {
                padding: 2,
                color: theme.palette.primary.main,
                margin: 5,
                textAlign: 'center',
            },
            grid: {
                backgroundColor: `rgba(255, 255, 255, 0.4)`,
                justifyContent: `center`,
                alignItems: `center`,
            },
            // root: {
            //     display: `flex`,
            //     backgroundColor: `rgba(255, 255, 255, 0.4)`,
            //     justifyContent: `center`,
            //     alignItems: `center`,
            //     height: `100vh`,
            //     width: `80%`,
            //     margin: `0`,
            //     maxWidth: `80%`,
            //     [theme.breakpoints.down('xs')]: {
            //         width: `100%`,
            //         maxWidth: `100%`,
            //     }
            // },
            // grid: {
            //     height: `auto`,
            //     justifyContent: `center`,
            //     alignItems: `center`,
            //     display: `flex`,
            // },
            // paper: {
            //     display: `flex`,
            //     flexDirection: `column`,
            //     height: "auto",
            //     width: `90%`,
            //     backgroundColor: `rgba(255, 255, 255, 0.5)`,
            //     border: `3px`,
            //     borderStyle: `solid`,
            //     borderColor: theme.palette.primary.main,
            // },
            header: {
                backgroundColor: `rgba(255, 255, 255, 0.4)`,
                // paddingTop: 100,
                // paddingLeft: 50,
                justifyContent: `center`,
                alignItems: `center`,
                textAlign: `center`,
            },
            img: {
                maxWidth: 120,
                maxHeight: 120
            }
        }),
    );
    const classes = useStyles();
    return (
        // <Grid
        //     container
        //     spacing={3}
        //     justify="center"
        //     alignItems="center"
        // >
        <div>

            {/* <h1 className={classes.header}>Find Other Musicians</h1> */}
        

        <div className={classes.root}>
            {/* refactor - users.reduce here */}
            {users.filter((user: { intentionStatus: string }) => !props.status || user.intentionStatus === props.status).map((user) => {
                return (
                
                    <Grid container direction="column"
                        justify="center"
                        alignItems="center"
                        key={user.email}
                       >
                        <Grid className={classes.root} item  xs={12} sm={6} xl={2}
                            justify="center"
                            alignItems="center"
                        >
                            <Paper className={classes.paper}>
                                <img
                                    className={classes.img}
                                    src={user.image}
                                    alt="user photo"
                                />
                                <h2 >{user.nickName}</h2>
                                <h2 >{user.bandName}</h2>
                                <p>{user.firstName} {user.lastName}</p>
                                <p>{user.intentionStatus}</p>
                                <p>{user.location}</p>
                                <p>{user.email}</p>
                                <p>{user.phone}</p>
                                <p>{user.blurb}</p>
                            </Paper>
                        </Grid>
                    </Grid>
                )
            })}
        </div>
        </div>
        // </Grid>
    )
}


export default UserCard