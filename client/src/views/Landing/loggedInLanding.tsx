import React from 'react';
import { Switch } from "react-router-dom";
import Find from '../Find/Find';
import TempProfile from '../CreateProfile/TempProfile';
import UserProfile from '../UserProfile/UserProfile'
import CreateProfile from '../CreateProfile/CreateProfile';
import ProtectedRoute from '../../auth/protected-route';
import EditProfile from '../EditProfile/EditProfile'
import PrevProfile from '../EditProfile/PrevProfile'
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const LoggedInLanding: React.FC = (): JSX.Element => {

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            backgroundColor: `rgba(255, 255, 255, 0.4)`,
            paddingTop: 100,
            // paddingLeft: 50,
            justifyContent: `center`,
            alignItems: `center`,
            textAlign: `center`,
        },
    })
    )
    const classes = useStyles();
    return (
        <>
        
            <Switch>
                <ProtectedRoute exact path="/tempprofile" component={TempProfile} />
                <ProtectedRoute exact path="/prevprofile" component={PrevProfile} />
                <ProtectedRoute exact path="/createprofile" component={CreateProfile} />
                <ProtectedRoute exact path="/editprofile" component={EditProfile} />
                <ProtectedRoute exact path="/" component={UserProfile} />
                <ProtectedRoute exact path="/find" component={Find} />
            </Switch>
           <div className={classes.header}>
               {/* <UserProfile /> */}
           </div>
        </>
    );
}

export default LoggedInLanding;