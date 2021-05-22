import React from "react";
import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: `#181D27`,
    width: `300px`,
    margin: `.05rem`
  }
}));

const LoginButton:React.FC = (): JSX.Element => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();
  return (
    <Button className={classes.root}
      variant="contained" color="secondary"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default withRouter(LoginButton);