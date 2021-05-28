import React from "react";
import { Container, Button, makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface IProps {
  bg: any
}

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
const PrevProfile: React.FC<IProps> = (bg): JSX.Element => {

  const classes = useStyles();

    return (
      <div className={classes.root} style={{ backgroundImage: `url(/backgrounds/loggedinbg${bg}.jpg)` }}>
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