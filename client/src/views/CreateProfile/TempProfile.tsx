import React from "react";
import { Container, Button, makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

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

const TempProfile: React.FC = (): JSX.Element => {
  
  const classes = useStyles();

  const user: any = useAuth0();


  const profile = useSelector((state: RootState) => state.profile)


  return (
      <Container className={classes.header}>
        <div className="col-md-2 mb-3">
          <img
            src={user.user.picture}
            alt="Profile"
          />
        </div>
        <div>
          <h2>{profile.profile.nickName}</h2>
          <p>Status: {profile.profile.intentionStatus}</p>
          <p>Band Name: {profile.profile.bandName}</p>
          <p>Email: {profile.profile.email}</p>
          <p>Phone: {profile.profile.phone}</p>
          <p>Location {profile.profile.location}</p>
          <p>About: {profile.profile.blurb}</p>
        </div>
        <Button>
          <Link to="/find">Find other users!</Link>

        </Button>
      </Container>
  );
};

export default TempProfile;

