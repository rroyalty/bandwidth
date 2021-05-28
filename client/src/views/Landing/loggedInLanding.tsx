import React from 'react';
import { Switch } from "react-router-dom";
import Find from '../Find/Find';
import TempProfile from '../CreateProfile/TempProfile';
import UserProfile from '../UserProfile/UserProfile'
import CreateProfile from '../CreateProfile/CreateProfile';
import ProtectedRoute from '../../auth/protected-route';
import EditProfile from '../EditProfile/EditProfile';
import PrevProfile from '../EditProfile/PrevProfile';
import { Container } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => createStyles({
    root: {
        display: `flex`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: "100vw",
        height: "100vh",
        justifyContent: `center`,

    }
}));

const LoggedInLanding: React.FC = (): JSX.Element => {
    const classes = useStyles();

    //5 Backgrounds
    const random = Math.floor(Math.random() * 5) + 1;

    return (
        <Switch>
            <Container maxWidth='xl' className={classes.root} style={{ backgroundImage: `url(/backgrounds/loggedinbg${random}.jpg)` }}>
                <ProtectedRoute exact path="/tempprofile" component={TempProfile} />
                <ProtectedRoute exact path="/prevprofile" component={PrevProfile} />
                <ProtectedRoute exact path="/createprofile" component={CreateProfile} />
                <ProtectedRoute exact path="/editprofile" component={EditProfile} />
                <ProtectedRoute exact path="/" component={UserProfile} />
                <ProtectedRoute exact path="/find" component={Find} />
            </Container>
        </Switch>
    );
}

export default LoggedInLanding;
