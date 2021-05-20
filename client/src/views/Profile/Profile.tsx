import React, { useState } from "react";
import { Container } from '@material-ui/core';
import './style.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
// import editProfile from './EditProfile'
import './style.css';
// import IProfileStateArray from './profileSlice'
import { useSelector } from "react-redux";
import selectProfile from './profileSlice';
import axios from 'axios'
import { RootState } from "../../redux/store";


const Profile: React.FC = (): JSX.Element => {
  const user: any = useAuth0();

 
  // return response.data
  // const userInfo = useSelector(state => selectProfile)

  let userInfo:any;
const fetchItem = async() => {
  try{
   const response = await axios('/api/users');
    console.log(response.data);
    userInfo = response.data
    return userInfo
  } catch{
    if (!userInfo)
    return
  }
}
// fetchItem();
// console.log(userInfo)
 


  const profile = useSelector((state: RootState) => state.profile)
  console.log(profile.profile)



  return (
    <div>
      <Container className="bg">
        <div className="col-md-2 mb-3">
          <img
            src={user.user.picture}
            alt="Profile"
          />
        </div>
        <div>
          <h2>{profile.profile.displayName}</h2>
          <p>{userInfo}</p>
          {/* <p>{profile.profile.displayName}</p> */}
          <p>Status: {profile.profile.intentionStatus}</p>
          <p>Band Name: {profile.profile.bandName}</p>
          <p>Email: {profile.profile.email}</p>
          <p>Phone: {profile.profile.phone}</p>
          <p>Location {profile.profile.location}</p>
          <p>About: {profile.profile.blurb}</p>
        </div>
        {/* <Link to="/createProfile">Edit Profile</Link> */}

        <div>

        </div>

      </Container>
    </div>
  );
};

export default Profile;

