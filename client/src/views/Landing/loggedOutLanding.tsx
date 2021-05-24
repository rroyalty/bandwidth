import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Landing from '../../components/Landing/landing';
import About from '../../components/Landing/About';
import TheTeam from '../../components/Landing/TheTeam';
import Footer from '../../components/Footer/Footer';
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: `flex`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: "100vh",
    justifyContent: `center`,

  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    display: `flex`,
  }
}));


const LoggedOutLanding: React.FC = (props: any): JSX.Element => {
  
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

  return (
    <Router>
        <>
          <Container id="landing" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/background${shufArray[0]}.jpg)` }} >
            <Landing />
          </Container>
          <Container id="about" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/background${shufArray[1]}.jpg)` }} >
            <About />
          </Container>
          <Container id="theteam" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/background${shufArray[2]}.jpg)` }} >
            <TheTeam />
          </Container>
          <Container id="support" className={classes.footer} maxWidth='xl' >
            <Footer />
          </Container>
        </>
    </Router>
  );
}

export default LoggedOutLanding;