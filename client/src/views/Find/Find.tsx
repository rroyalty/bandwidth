import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import UserCard from '../../components/Users/UserCards';
import SearchStatus from '../../components/Search/SearchStatus';
import { createStyles, makeStyles, GridList, Container, Grid } from '@material-ui/core';

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
            overflow: `hidden`,
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: `95vw`,
            border: `2px`,
            borderStyle: `solid`,
            borderColor: `white`,
            padding: `0px`,
            maxHeight: `100vh`
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
            alignItems: 'top',
            overflowX: 'hidden',
            maxHeight: `100vh`,
            overflow: `auto`,
            width: `100%`
        },
        gridItem: {
            width: `100%`
        },
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

    const length: number = users.filter((user: UserI) => !status ? user : user.props.intentionStatus === status).length - 1

    return (
        <Container maxWidth="xl" className={classes.root} >
            <Grid container spacing={1}>
                <Grid className={classes.gridItem} item xl={12}>
                    <SearchStatus status={status} setSearchStatus={setSearchStatus} />
                </Grid>
                <Grid className={classes.gridItem} item container xl={12}>
                    <GridList className={classes.gridList} cellHeight={160} >
                        {users.filter((user: UserI) => !status ? user : user.props.intentionStatus === status).map((tile, index: number) => <UserCard key={tile.props.email} props={tile.props} eleIndex={index} arrLength={length} />)}
                    </GridList>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Find;