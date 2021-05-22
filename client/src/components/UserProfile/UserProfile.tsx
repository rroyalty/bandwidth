import React, { useEffect, useState } from "react";
import { Container } from '@material-ui/core';
import './style.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import axios from 'axios'
// import { RootState } from "../../redux/store";
import API from "../../utils/API";
// import CreateProfile from '../CreateProfile/CreateProfile'
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

const UserProfile = () => {
  const userProfile: any = useAuth0();

  const [user, setUser] = useState<IUser[]>([])

  const writeProfile = (res: any[]) => {
    const users: IUser[] = user.map((user) => {
      return {
        nickName: user.nickName,
        firstName: user.firstName,
        lastName: user.lastName,
        intentionStatus: user.intentionStatus,
        location: user.location,
        email: user.email,
        phone: user.phone,
        blurb: user.blurb
      }
    })
    console.log(users)
    setUser(users)
    // userExists()
  }


  useEffect(() => {
    API.getUser(userProfile.user.email).then(res => {
      const findUser = res.data;
      // const thisUser = findUser.filter((findUser: any) => userProfile.user.email === findUser.email)
      console.log(findUser)
      writeProfile(findUser)
      // console.log(email)
    })
  }, [])

   const userExists = () => {
     return (
   <div className="userexists">
      {user.map((user) => {
        return (
          <Container maxWidth="lg" >
            <h1>User Profile Page</h1>
            <h1 key={user.nickName}>{user.nickName}</h1>
            <p key={user.firstName}>{user.firstName} {user.lastName}</p>
            <p key={user.intentionStatus}>{user.intentionStatus}</p>
            <p key={user.location}>{user.location}</p>
            <p key={user.email}>{user.email}</p>
            <p key={user.phone}>{user.phone}</p>
            <p key={user.blurb}>{user.blurb}</p>
          </Container>
        )
      })}
    </div>
     )
   } 

   const noUserExists = () => {
     return(
       <Container>
       <div className="no user exists">
       <h1>Welcome to BandWidth!</h1>
       <p>Thanks for joining BandWidth.</p>
       <p>Please click the button below to finish creating your profile.</p>
       <p>Once you have created a profile other users will be able to contact you and get in touch.</p>
       <Button>
       <Link to="createprofile">Create Profile Now</Link>
       </Button>
       </div>
       </Container>
       
     )
   }
  return (
    <div className="paddingfix test test">
      {/* {userExists()} */}
      {!user || user == null ? noUserExists() : userExists() }
    </div>
  );
};

export default UserProfile;

        // <Button>
        // {/* Link to 'edit profile' here */}
        // </Button>
