import React, { useEffect, useState } from "react";
import { Container } from '@material-ui/core';
import './style.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import axios from 'axios'
// import { RootState } from "../../redux/store";
import API from "../../utils/API";
import CreateProfile from '../CreateProfile/CreateProfile'
import { Button } from "@material-ui/core";

// ========================================================================================================
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
    const users: IUser[] = res.map((user) => {
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

  }


  useEffect(() => {
    API.getUsers().then(res => {
      const findUser = res.data;
      const thisUser = findUser.filter((findUser: any) => userProfile.user.email === findUser.email)
      writeProfile(thisUser)
    })
  }, [])

   const userExists = () => {
     return (
   <div className="">
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
       <div className="">
       <h1>Welcome to BandWidth!</h1>
       <p>Thanks for joining BandWidth.</p>
       <p>Please click the button below to finish creating your profile. </p>
       <Button>
       <Link to="createprofile">Create Profile Now</Link>
       </Button>
       </div>
       </Container>
       
     )
   }
  return (
    <div className="paddingfix">
      {!user || user.length == 0 ? noUserExists() : userExists() }
    </div>
  );
};

export default UserProfile;

        // <Button>
        // {/* Link to 'edit profile' here */}
        // </Button>
