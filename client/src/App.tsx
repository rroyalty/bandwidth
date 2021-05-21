import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './views/Landing/landing';
import Find from './views/Find/Find';
import About from './views/About/About';
import TheTeam from './views/TheTeam/TheTeam';
import Profile from './views/Profile/Profile';
import CreateProfile from './views/Profile/CreateProfile';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './auth/protected-route';
import Navbar from './components/Navbar/Navbar';
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: `flex`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: "100vh",
    justifyContent: `center`
  }
}));


const App: React.FC = (props: any): JSX.Element => {

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
  const classes = useStyles();
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
        <>
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/createprofile" component={CreateProfile} />
            <ProtectedRoute exact path="/find" component={Find} />
          </Switch>
          <Container id="landing" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/background${shufArray[0]}.jpg)` }} >
            <Landing />
          </Container>
          <Container id="find" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/background${shufArray[2]}.jpg)` }} >
            <Find />
          </Container>
          <Container id="about" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/background${shufArray[1]}.jpg)` }} >
            <About />
          </Container>
          <Container id="theteam" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/background${shufArray[2]}.jpg)` }} >
            <TheTeam />
          </Container>
          {/* <Footer /> */}
        </>
    </Router>

  );

  // return (
  // <Router>
  //   <>
  //     <Container className={classes.root} maxWidth='xl' style={{backgroundImage: `url(${backgroundList[0]})`}} >
  //       <Navbar />
  //       <Switch>
  //         <Route exact path="/index" component={Landing} />
  //         <Route exact path="/browse" component={Browse} />
  //         <Route exact path="/about" component={About} />
  //         <Route exact path="/" component={Landing} />
  //         <ProtectedRoute exact path="/profile" component={Profile} />
  //         <ProtectedRoute exact path="/editprofile" component={editProfile} />
  //       </Switch>
  //     </Container>
  //     {/* <Footer /> */}
  //   </>

  // </Router>

  // );
}

export default App;