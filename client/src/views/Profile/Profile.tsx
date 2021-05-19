import React, { useState } from "react";
import { Container } from '@material-ui/core';
import './style.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
// import editProfile from './EditProfile'
import './style.css';
import IProfileStateArray from './profileSlice'
import { useSelector } from "react-redux";
import selectProfile from './profileSlice'
import editProfile from './EditProfile'

const Profile: React.FC = (): JSX.Element => {
  const user: any = useAuth0();

  // const userInfo = useSelector(selectProfile => state.profile.find(profile => profile.id === id))
  // const { name, picture, email } = user;

  return (
    <div>
      {/* {console.log(IProfileStateArray)} */}
      <Container className="bg">
        <div className="col-md-2 mb-3">
          <img
            src={user.user.picture}
            alt="Profile"
          />
        </div>
        <div>
          <h2>{user.user.name}</h2>
          {console.log(user)}
          <p>Display Name: {user.user.nickname}</p>
          <p>Status:</p>
          <p>Band Name:</p>
          <p>Email: {user.user.email}</p>
          <p>Phone</p>
          <p>Location</p>
        </div>
        <Link to="/editprofile">Edit Profile</Link>

        <div>

        </div>

      </Container>
    </div>
  );
};

export default Profile;

