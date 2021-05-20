import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import API from '../../utils/API'
import { useState } from 'react';
export interface UserI {
    nickName: string,
    firstName: string,
    lastName: string,
    intentionStatus: string,
    location: string,
    email: string,
    phone: string
}

const UserCard = () => {

    const [users, setUsers] = useState<UserI[]>([])


    const dbUsers = (data: any[]) => {
        const userUser: UserI[] = data.map((dbUser) => {
            return {
                nickName: dbUser.nickName,
                firstName: dbUser.firstName,
                lastName: dbUser.lastName,
                intentionStatus: dbUser.intentionStatus,
                location: dbUser.location,
                email: dbUser.email,
                phone: dbUser.phone,
            }
        })
        setUsers(userUser)
    }



    useEffect(() => {
        API.getUsers().then(res => {
            console.log(res.data)
            dbUsers(res.data);
        })
    }, [])


    return (
        <Container maxWidth="xs" className="bg">
            {/* {onLoad()} */}
            {users.map((user) => {
                return (
                    <div>
                        <p key={user.nickName}>{user.nickName}</p>
                        <p>{user.firstName} {user.lastName}</p>
                        <p>{user.intentionStatus}</p>
                        <p>{user.location}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>---------------------</p>
                    </div>
                )
            })}
            <p>photohere</p>
            <p>Status</p>
            <p>City </p>
            <p>State</p>
            <p>Instrument</p>
            {/* <p>{users}</p> */}
        </Container>
    )
}

export default UserCard