import React, { useEffect, useState } from "react";
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import { Button } from "@material-ui/core";
// ==============================================================================================================
// User Profile page - this pulls info from the DB, and compares a users logged in email, with info we have stored
// ===============================================================================================================
export interface IUser {
  nickName: string,
  firstName: string,
  lastName: string,
  intentionStatus: string,
  location: string,
  email: string,
  phone: string,
  blurb: string,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: `rgba(255, 255, 255, 0.8)`,
      paddingTop: 100,
      justifyContent: `center`,
      alignItems: `center`,
      textAlign: `center`,
      width: `80vw`,
      height: `90vh`

    }
  })
)

const UserProfile: React.FC = (): JSX.Element => {

  const classes = useStyles();

  const userProfile: any = useAuth0();

  const [user, setUser] = useState<IUser | null>(null)
  useEffect(() => {
    API.getUser(userProfile.user.email).then(res => {
      const findUser = res.data;
      setUser(findUser)
    })
  }, [])


  const userExists = () => {
    if (!user) return <> </>


    return (

        <Container maxWidth="xl" className={classes.header}>
          <img
            src={userProfile.user.picture}
            alt="user photo"
          />
          <h1>Welcome {user.nickName}!</h1>
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.intentionStatus}</p>
          <p>{user.location}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.blurb}</p>
          <Link to="/editprofile">Edit Profile</Link>
        </Container>

    )
  }

  const noUserExists = () => {
    return (


      <Container maxWidth="xl" className={classes.header}>
        <h1>Welcome to BandWidth!</h1>
        <p>Thanks for joining BandWidth.</p>
        <p>Please click the link below to finish creating your profile.</p>
        <p>Once you have created a profile other users will be able to contact you and get in touch.</p>
        <Button>
          <Link to="createprofile">Create Profile Now</Link>
        </Button>
      </Container>

    )
  }
  return (
    <div>
      {(!userProfile || userProfile == null || !user) ? noUserExists() : userExists()}
    </div>
  );
};
export default UserProfile;