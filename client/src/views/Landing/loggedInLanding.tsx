import React from 'react';
import { Switch } from "react-router-dom";
import Find from '../Find/Find';
import TempProfile from '../CreateProfile/TempProfile';
import UserProfile from '../UserProfile/UserProfile'
import CreateProfile from '../CreateProfile/CreateProfile';
import ProtectedRoute from '../../auth/protected-route';
import EditProfile from '../EditProfile/EditProfile'
import PrevProfile from '../EditProfile/PrevProfile'

const LoggedInLanding: React.FC = (): JSX.Element => {
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
        </>
    );
}

export default LoggedInLanding;