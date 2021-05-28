import { withRouter } from 'react-router';
import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import UserCard from '../../components/Users/UserCards';
import SearchStatus from '../../components/Search/SearchStatus';
import { createStyles, makeStyles, Theme, GridList, Container } from '@material-ui/core';

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

const useStyles = makeStyles((theme: Theme) =>
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
        }

    }),
);

const Find: React.FC = (): JSX.Element => {
    let bgArray: Array<number> = [1, 2, 3, 4]

    const arrayShuf = (array: Array<number>): Array<number> => {
      let j: number = 0;
      let temp: number;
  
      for (let i = array.length - 1; i >= array.length - 3; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
  
      return array;
    }
  
    const shufArray: Array<number> = arrayShuf(bgArray);
   

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
        <div className={classes.img} style={{ backgroundImage: `url(/backgrounds/loggedinbg${shufArray[0]}.jpg)` }}>

        <Container className={classes.root} >
            <SearchStatus status={status} setSearchStatus={setSearchStatus} />
            <GridList cellHeight={160} cols={5} spacing={4}>
                {users.filter((user: UserI) => !status ? user : user.props.intentionStatus === status).map((tile) => <UserCard key={tile.props.email} props={tile.props} />)}
            </GridList>
        </Container>
        </div>
    )
}

export default withRouter(Find);