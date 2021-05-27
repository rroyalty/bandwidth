import React, { useState } from 'react';
import { createStyles, makeStyles, GridListTile, Avatar, Card, Typography } from '@material-ui/core';
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
            backgroundColor: `rgba(255, 255, 255, 0.8)`,
            justifyContent: 'center',
            textAlign: 'center',
            width: `auto`,
            margin: `10px`,
            padding: `25px`,
            display: `flex`,
            flexDirection: `column`
        },
        blurb: {
            maxWidth: '20vw'
        }
    }),
);


const UserCard: React.FC<IUserCardProps> = (props): JSX.Element => {

    const classes = useStyles();

    // const getGridListCols = () => {
    //     if (isWidthUp('xl', props.width)) {
    //       return 4;
    //     }
    
    //     if (isWidthUp('lg', props.width)) {
    //       return 3;
    //     }
    
    //     if (isWidthUp('md', props.width)) {
    //       return 2;
    //     }
    
    //     return 1;
    //   }
    return (
        <GridListTile key={props.props.nickName} cols={1}>
            <Card className={classes.root} >
                <Avatar src={props.props.image} alt={props.props.nickName} />
                <Typography>{`${props.props.firstName} ${props.props.lastName}`}</Typography>
                <Typography>{props.props.intentionStatus}</Typography>
                <Typography>{props.props.bandName}</Typography>
                <Typography>{props.props.location}</Typography>
                <Typography>{props.props.phone}</Typography>
                <Typography className={classes.blurb}>{props.props.blurb}</Typography>
            </Card>
        </GridListTile>
    )
}


export default UserCard