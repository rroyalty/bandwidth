import React, { useEffect } from 'react';
import { Container, createStyles, Grid, makeStyles } from '@material-ui/core';
import API from '../../utils/API'
import { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

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

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                backgroundColor: `rgba(255, 255, 255, 0.4)`,
                // backgroundColor: `#fff`,
                flexGrow: 1,
                // justifyContent: `center`,
                // alignItems: `center`,
                // maxHeight: `100vh`,
                // overflow: `auto`,
                // width: `80%`,
                // margin: `0`,
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
            // direction="row"
            justify="center"
            alignItems="center"
        >

        <div className={classes.root}>
                    <h1 className={classes.header}>Find Other Musicians</h1>
            {users.map((user) => {
                return (
                    <Container className={classes.root} maxWidth="lg" >
                          <Grid container spacing={3}>
                        <Grid className={classes.root} item xs={12}>
                            <h1 key={user.nickName}>{user.nickName}</h1>
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
                    // <Grid container spacing={3} className={classes.grid}>
                    
                    //   <Paper className={classes.paper}>{user.nickName}</Paper>
                    
                    
                    //   <Paper className={classes.paper}>{user.firstName} {user.lastName}</Paper>
                      
                      
                    //   <Paper key={user.intentionStatus}>{user.intentionStatus}</Paper>
                    
                       
                    //   <Paper key={user.location}>{user.location}</Paper>
                      
                      
                    //   <Paper key={user.email}>{user.email}</Paper>
                      
                      
                    //   <Paper key={user.phone}>{user.phone}</Paper>
                      
                    //   <Paper key={user.blurb}>{user.blurb}</Paper>
                    // </Grid>
                )
            })}
            </div>
         </Grid>
    )
}

{/* <div className={classes.root}>
<Grid container spacing={3}>
  <Grid item xs={12}>
    <Paper className={classes.paper}>xs=12</Paper>
  </Grid>
  <Grid item xs={6}>
    <Paper className={classes.paper}>xs=6</Paper>
  </Grid>
  <Grid item xs={6}>
    <Paper className={classes.paper}>xs=6</Paper>
  </Grid>
  <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid>
  <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid>
  <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid>
  <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid>
</Grid>
</div> */}

export default UserCard