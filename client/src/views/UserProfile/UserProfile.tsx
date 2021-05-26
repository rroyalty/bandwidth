import React, { useEffect, useState } from "react";
import { Container } from '@material-ui/core';
// import './style.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
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
  bandName: string,
  location: string,
  email: string,
  phone: string,
  blurb: string,
}

const UserProfile = () => {
  const userProfile: any = useAuth0();

  const [user, setUser] = useState<IUser | null>(null)


  useEffect(() => {
    API.getUser(userProfile.user.email).then(res => {
      const findUser = res.data;
      // console.log(findUser)
      setUser(findUser)
      localStorage.setItem('location', JSON.stringify(findUser.location));
      // console.log('local storage set')
    })
  }, [])

   const userExists = () => {
     if (!user) return <> </>

     return (
   <div>
          <Container maxWidth="lg" >
            <h1>User Profile Page</h1>
            <h1 >{user.nickName}</h1>
            <h2>{user.bandName}</h2>
            <p >{user.firstName} {user.lastName}</p>
            <p >{user.intentionStatus}</p>
            <p >{user.location}</p>
            <p >{user.email}</p>
            <p >{user.phone}</p>
            <p >{user.blurb}</p>
          </Container>
        <Link to="editprofile">Edit Profile</Link>
   
    </div>
     )
   } 

   const noUserExists = () => {
     return(
       <Container>
       <div>
       <h1>Welcome to BandWidth!</h1>
       <p>Thanks for joining BandWidth.</p>
       <p>Please click the link below to finish creating your profile.</p>
       <p>Once you have created a profile other users will be able to contact you and get in touch.</p>
       <Button>
       <Link to="createprofile">Create Profile Now</Link>
       </Button>
       </div>
       </Container>
     )
   }
  return (
    <div className="paddingfix">
      {(!userProfile || userProfile == null || !user) ?  noUserExists() : userExists()}
    </div>
  );
};

export default UserProfile;

     
