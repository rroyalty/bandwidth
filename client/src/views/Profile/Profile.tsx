import React, { useState } from "react";
import { Container } from '@material-ui/core';
import './style.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import editProfile from './EditProfile'
import './style.css';
import { useSelector } from "react-redux";
import { profile } from "console";
// import { profile } from "console";

const Profile: React.FC = (): JSX.Element => {
  const user: any = useAuth0();
  // const { name, picture, email } = user;

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
          <h2>{user.user.name}</h2>
          {console.log(user)}
          <p className="lead text-muted">Display Name: {user.user.nickname}</p>
          <p className="lead text-muted">Status:</p>
          <p className="lead text-muted">Band Name:</p>
          <p className="lead text-muted">Email: {user.user.email}</p>
          <p className="lead text-muted">Phone</p>
          <p className="lead text-muted">Location</p>
        </div>
        <Link to="/editprofile">Edit Profile</Link>
      {/* </Container> */}
      <div>
        {/* <pre>
          {JSON.stringify(user, null, 2)}
        </pre> */}
      </div>
      <Link to="/editprofile">Edit Profile</Link>
      </Container>
    </div>
  );
};

export default Profile;

