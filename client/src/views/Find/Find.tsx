import { withRouter } from 'react-router';
import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import UserCard from '../../components/Users/UserCards';
import SearchStatus from '../../components/Search/SearchStatus';
import './style.css';
import { GridList, Container } from '@material-ui/core';

export interface UserI {
    props: {
        nickName: string,
        image: string,
        firstName: string,
        lastName: string,
        intentionStatus: string,
        bandName: string,
        location: string,
        email: string,
        phone: string,
        blurb: string,
    }
}

export interface IUserCardProps {
    status: string,
}

const Find: React.FC = (): JSX.Element => {

    const [status, setSearchStatus] = useState("");
    const [users, setUsers] = useState<UserI[]>([])

    const dbUsers = (data: any[]) => {
        const userUser: UserI[] = data.map((dbUser) => {
            return {
                props: {
                    nickName: dbUser.nickName,
                    image: dbUser.image,
                    firstName: dbUser.firstName,
                    lastName: dbUser.lastName,
                    intentionStatus: dbUser.intentionStatus,
                    bandName: dbUser.bandName,
                    location: dbUser.location,
                    email: dbUser.email,
                    phone: dbUser.phone,
                    blurb: dbUser.blurb
                }
            }
        })
        setUsers(userUser)
    }

    useEffect(() => {
        API.getAllUsers().then(res => {
            dbUsers(res.data);
        })
    }, [])

    return (
        <Container className="paddingfix" >
            <SearchStatus status={status} setSearchStatus={setSearchStatus} />
            <GridList cellHeight={160} cols={3}>
                {users.filter((user: UserI) => user.props.intentionStatus === status).map((tile) => <UserCard key={tile.props.email} props={tile.props} />)}
            </GridList>
        </Container>
    )
}

export default withRouter(Find);