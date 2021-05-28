import React from "react";
import { Container, Button, makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: `flex`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: "100vh",
    justifyContent: `center`,
  },
    header: {
        backgroundColor: `rgba(255, 255, 255, 0.8)`,
        paddingTop: 100,
        justifyContent: `center`,
        alignItems: `center`,
        textAlign: `center`,
        width: `40vw`,
        height: `90vh`

    }
})
)
const PrevProfile: React.FC = (): JSX.Element => {

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
      <div className={classes.root} style={{ backgroundImage: `url(/backgrounds/loggedinbg${shufArray[0]}.jpg)` }}>
        <Container className={classes.header}>
          <div>
          <Typography>Profile Edited!</Typography>
          <img src="https://media.giphy.com/media/hogi8ozWopwA3vzJS0/giphy.gif" alt="guitar" />
         
         <div>

            <Button>
              <Link to="/find">Find other users!</Link>
            </Button>
         </div>
           
          </div>
        </Container>
      // </div>
    );
  };

  export default PrevProfile;