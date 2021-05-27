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
// 
// let bgArray: Array<number> = [1, 2, 3, 4]

// const arrayShuf = (array: Array<number>): Array<number> => {
//   let j: number = 0;
//   let temp: number;

//   for (let i = array.length - 1; i >= array.length - 3; i--) {
//     j = Math.floor(Math.random() * (i + 1));
//     temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }

//   return array;
// }

// const shufArray: Array<number> = arrayShuf(bgArray);
// const classes = useStyles();

// return (
//   <Router>
//       <>
//         <Container id="landing" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/background${shufArray[0]}.jpg)` }} >
//           <Landing />
//         </Container>
//         <Container id="about" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/background${shufArray[1]}.jpg)` }} >
//           <About />
//         </Container>
//         <Container id="theteam" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/background${shufArray[2]}.jpg)` }} >
//           <TheTeam />
//         </Container>
//         <Container id="support" className={classes.footer} maxWidth='xl' >
//           <Footer />
//         </Container>
//       </>
//   </Router>
// );
// }