import React, { useState } from "react";
import { Container } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import editProfile from './EditProfile'
import './style.css';
import { useSelector } from "react-redux";
import { profile } from "console";
// import { profile } from "console";


const Profile: React.FC = (): JSX.Element => {
  const  user:any  = useAuth0();
  console.log()
  // const userInfo = useSelector(state => state.profile.find(profile => profile.id === id))
  // const { name, picture, email } = user;
  console.log(user)


  return (
    <div>
      <Container className="bg">
  
      <div >

        <div >
          <img
            src={user.user.picture}
            alt="Profile"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{user.user.name}</h2>
          {console.log(user)}
          <p className="lead text-muted">Display Name: {user.user.nickname}</p>
          <p className="lead text-muted">Status:</p>
          <p className="lead text-muted">Band Name:</p>
          <p className="lead text-muted">Email: {user.user.email}</p>
          <p className="lead text-muted">Phone</p>
          <p className="lead text-muted">Location</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
      
        </pre>
      </div>
      <Link to="/editprofile">Edit Profile</Link>
    </Container>
    </div>
  );
};

export default Profile;

