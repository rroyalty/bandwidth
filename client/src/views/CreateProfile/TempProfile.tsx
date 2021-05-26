import React from "react";
import { Container, Button } from '@material-ui/core';
import './style.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios'
import { RootState } from "../../redux/store";


const TempProfile: React.FC = (): JSX.Element => {
  const user: any = useAuth0();

 
  // return response.data
  // const userInfo = useSelector(state => selectProfile)

  let userInfo:any;
const fetchItem = async() => {
  try{
   const response = await axios('/api/users');
    userInfo = response.data
    return userInfo
  } catch{
    if (!userInfo)
    return
  }
}

  const profile = useSelector((state: RootState) => state.profile)


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
          <h2>{profile.profile.nickName}</h2>
          <p>{userInfo}</p>
          {/* <p>{profile.profile.displayName}</p> */}
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
    </div>
  );
};

export default TempProfile;

