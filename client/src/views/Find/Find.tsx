import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import UserCard from '../../components/Users/UserCards';
import SearchStatus from '../../components/Search/SearchStatus';
import { createStyles, makeStyles, GridList, Container } from '@material-ui/core';

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

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: `90vw`,

        },
        img: {
            display: `flex`,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: 'auto',
            minHeight: '100vh',
            justifyContent: `center`,
        },
        gridList: {
            paddingTop: `20px`,
            display: `flex`,
            justifyContent: 'center',
            alignItems: 'center',
            overflowX: 'hidden',
            maxHeight: `70vh`
        }

    }),
);

const Find: React.FC = (): JSX.Element => {

    const classes = useStyles();
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
        <Container maxWidth="xl" className={classes.root} >
            <SearchStatus status={status} setSearchStatus={setSearchStatus} />
            <GridList className={classes.gridList} cellHeight={160} >
                {users.filter((user: UserI) => !status ? user : user.props.intentionStatus === status).map((tile) => <UserCard key={tile.props.email} props={tile.props} />)}
            </GridList>
        </Container>

    )
}

export default Find;