import React from "react";
import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
      backgroundColor: `#181D27`,
      width: `300px`,
      margin: `.05rem`
  }
}));

const SignupButton:React.FC = ():JSX.Element => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();
  return (
    <Button className={classes.root}
      variant="contained" color="secondary"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </Button>
  );
};

export default SignupButton;