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
    
    let bgArray: Array<number> = [1, 2, 3, 4]

    const arrayShuf = (array: Array<number>): Array<number> => {
      let j: number = 0;
      let temp: number;
  
      for (let i = array.length - 1; i >= array.length - 3; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
  
      return array;
    }
  
    const shufArray: Array<number> = arrayShuf(bgArray);

    return (
        <>
            <Switch>
                <ProtectedRoute exact path="/tempprofile" component={TempProfile} bg={shufArray[0]} />
                <ProtectedRoute exact path="/prevprofile" component={PrevProfile} bg={shufArray[1]} />
                <ProtectedRoute exact path="/createprofile" component={CreateProfile} bg={shufArray[2]} />
                <ProtectedRoute exact path="/editprofile" component={EditProfile} bg={shufArray[3]} />
                <ProtectedRoute exact path="/" component={UserProfile} bg={shufArray[0]} />
                <ProtectedRoute exact path="/find" component={Find} bg={shufArray[1]} />
            </Switch>
        </>
    );
}

export default LoggedInLanding;
