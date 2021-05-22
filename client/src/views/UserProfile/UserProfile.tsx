import React, { useEffect, useState } from "react";

import { Container, Button } from '@material-ui/core';
import './style.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios'
import { RootState } from "../../redux/store";
import API from "../../utils/API";

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

//  console.log(userProfile.user)

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

        // console.log(thisUser[0])
        writeProfile(thisUser)
        // dbUsers(res.data);
    })
}, [])

  return (
    <div className="paddingfix">
{user.map((user) => {
    return (
        <Container  maxWidth="lg" >
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
  );
};

export default UserProfile;

        // <Button>
        // {/* Link to 'edit profile' here */}
        // </Button>
