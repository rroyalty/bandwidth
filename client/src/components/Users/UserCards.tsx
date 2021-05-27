import React, { useEffect } from 'react';
import { Container, createStyles, Grid, GridList, GridListTile, isWidthUp, makeStyles, Paper } from '@material-ui/core';
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: `rgba(255, 255, 255, 0.8)`,
            justifyContent: 'center',
            alignItems: `center`,
            textAlign: 'center',
            // flexGrow: 1,
        },
        paper: {
            backgroundColor: `rgba(255, 255, 255, 0.4)`,
            padding: 2,
            color: theme.palette.primary.main,
            margin: 5,
            textAlign: 'center',
        },
        grid: {
            backgroundColor: `rgba(255, 255, 255, 0.8)`,
            justifyContent: `center`,
            alignItems: `center`,
        },

        header: {
            backgroundColor: `rgba(255, 255, 255, 0.8)`,
            justifyContent: `center`,
            alignItems: `center`,
            textAlign: `center`,
        },
        img: {
            maxWidth: 120,
            maxHeight: 120
        },
        gridList: {
            width: `90vw`,
            height: `90vh`,
            justifyContent: 'center',
            alignItems: `center`,
            textAlign: 'center',
            // paddingLeft: 80,
            paddingTop: 30
        },
    }),
);

const UserCard: React.FC<IUserCardProps> = (props) => {
    const classes = useStyles()
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

    // const getGridListCols = () => {
    //     if (isWidthUp('xl', props.width)) {
    //       return 4;
    //     }
    
    //     if (isWidthUp('lg', props.width)) {
    //       return 3;
    //     }
    
    //     if (isWidthUp('md', props.width)) {
    //       return 2;
    //     }
    
    //     return 1;
    //   }
    return (
        // <Grid container 
        // // direction="column"
        //                 justify="center"
        //                 alignItems="center"
        //                 // className={classes.root}
        //             >
        //     {/* refactor - users.reduce here */}
        //     {users.filter((user: { intentionStatus: string }) => !props.status || user.intentionStatus === props.status).map((user) => {
        //         return (


        //                 <Grid item xs={12} sm={6} xl={2}
        //                     justify="center"
        //                     alignItems="center"
        //                     key={user.email}
        //                 >
        //                     <Paper className={classes.paper}>
        //                         <img
        //                             className={classes.img}
        //                             src={user.image}
        //                             alt="user photo"
        //                         />
        //                         <h2 >{user.nickName}</h2>
        //                         <h2 >{user.bandName}</h2>
        //                         <p>{user.firstName} {user.lastName}</p>
        //                         <p>{user.intentionStatus}</p>
        //                         <p>{user.location}</p>
        //                         <p>{user.email}</p>
        //                         <p>{user.phone}</p>
        //                         <p>{user.blurb}</p>
        //                     </Paper>
        //                 </Grid>
        //         )
        //     })}
        //     </Grid>
        // original cell height was 500
        <GridList cellHeight="auto" className={classes.gridList} cols={2}>
            {users.filter((user: { intentionStatus: string }) => !props.status || user.intentionStatus === props.status).map((user) => {
                return (
                    <GridListTile key={user.email} >
                        <Paper className={classes.root}>
                            <img className={classes.img} src={user.image} alt={user.nickName} />
                            <h2 >{user.nickName}</h2>
                            <h2 >{user.bandName}</h2>
                            <p>{user.firstName} {user.lastName}</p>
                            <p>{user.intentionStatus}</p>
                            <p>{user.location}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>{user.blurb}</p>
                        </Paper>
                    </GridListTile>
                )
            })}
        </GridList>
    )
}


export default UserCard