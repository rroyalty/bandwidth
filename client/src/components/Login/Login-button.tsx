import React from "react";
import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: `auto`,
    margin: `5px`,
    marginBottom: `10px`,
    padding: `10px`,
    border: `2px`,
    borderStyle: `solid`,
    borderColor: `white`
  }
}));

const LoginButton: React.FC = (): JSX.Element => {
  const classes = useStyles();

  const buttonText: Array<string> =[
    `Start Rockin'`,
    `Bring the Noise`,
    `Shred the Gnar`,
    `Spread the Jam`,
    `Find your Rhythm`,
    `Sing Loud, Sing Proud`
  ]
  const random = Math.floor(Math.random() * buttonText.length);
  

  const { loginWithRedirect } = useAuth0();
  return (
    <Button className={classes.root}
      variant="contained" color="secondary"
      onClick={() => loginWithRedirect()}
    >
      {buttonText[random]}
    </Button>
  );
};

export default withRouter(LoginButton);