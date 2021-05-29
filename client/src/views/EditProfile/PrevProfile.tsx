import React from "react";
import { Container, Button, makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

  const classes = useStyles();

  return (
      <Container className={classes.header}>
        <Typography>Profile Edited!</Typography>
        <img src="https://media.giphy.com/media/hogi8ozWopwA3vzJS0/giphy.gif" alt="guitar" />

          <Button>
            <Link to="/find">Find other users!</Link>
          </Button>

      </Container>
  );
};

export default PrevProfile;