import React, { useState } from 'react';
import { createStyles, makeStyles, GridListTile, Avatar, Card } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';


export interface IUserCardProps {
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: `rgba(255, 255, 255, 0.4)`,
            justifyContent: 'center',
            textAlign: 'center',
        },
        paper: {
            padding: 2,
            color: theme.palette.primary.main,
            margin: 5,
            textAlign: 'center',
        },
        grid: {
            backgroundColor: `rgba(255, 255, 255, 0.4)`,
            justifyContent: `center`,
            alignItems: `center`,
        },

        header: {
            backgroundColor: `rgba(255, 255, 255, 0.4)`,

            justifyContent: `center`,
            alignItems: `center`,
            textAlign: `center`,
        },
        img: {
            maxWidth: 120,
            maxHeight: 120
        }
    }),
);


const UserCard: React.FC<IUserCardProps> = (props): JSX.Element => {

    const classes = useStyles();

    return (
        <GridListTile key={props.props.nickName} cols={1}>
            <Card>
            <Avatar src={props.props.image} alt={props.props.nickName} />
            <p>{`${props.props.firstName} ${props.props.lastName}`}</p>
            <p>{props.props.intentionStatus}</p>
            <p>{props.props.bandName}</p>
            <p>{props.props.location}</p>
            <p>{props.props.phone}</p>
            <p>{props.props.blurb}</p>
            </Card>
        </GridListTile>
    )
}


export default UserCard