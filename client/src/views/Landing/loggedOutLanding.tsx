import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Landing from './Sub Views/Home';
import About from './Sub Views/About';
import TheTeam from './Sub Views/TheTeam';
import Footer from './Sub Views/Footer';
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: `flex`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: "100vw",
    justifyContent: `center`,

  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    display: `flex`,
  }
}));


const LoggedOutLanding: React.FC = (): JSX.Element => {
  
  let bgArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8]

  const arrayShuf = (array: Array<number>): Array<number> => {
    let j: number = 0;
    let temp: number;

    for (let i = array.length - 1; i > 0; i--) {
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