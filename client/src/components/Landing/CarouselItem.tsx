
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, Paper, Container, Avatar, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface IProps {
    props: {
        id: number,
        name: string,
        img: string,
        bio: string
    },
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.primary.main,
        border: `3px`,
        borderStyle: `solid`,
        borderColor: `white`,
        width: `70%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`

    },
    typography: {
        marginLeft: `15px`,
        marginRight: `15px`,
        color: `white`,
    },
    avatar: {
        height: "14vh",
        width: "14vh",
        border: `3px`,
        borderStyle: `solid`,
        marginTop: `15px`,
        marginBottm: `5px`,
        borderColor: `white`
    },
}));

const CarouselItem: React.FC<IProps> = (props): JSX.Element => {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Avatar className={classes.avatar} alt={props.props.name} src={props.props.img} />
            <Typography className={classes.typography}>
                <h2>{props.props.name}</h2>
                <p>{props.props.bio}</p>
            </Typography>
        </Paper>
    )
};

export default CarouselItem;