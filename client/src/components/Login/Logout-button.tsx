import React from "react";
import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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

const LogoutButton:React.FC = ():JSX.Element => {
  const classes = useStyles();
  const { logout } = useAuth0();
  return (
    <Button className={classes.root}
      variant="contained" color="secondary"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </Button>
  );
};

export default withRouter(LogoutButton);