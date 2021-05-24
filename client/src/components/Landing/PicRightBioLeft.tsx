
import React from 'react';
import { Grid, Paper, Avatar, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface IProps {
    props: {
        id: number,
        name: string,
        img: string,
        bio: string
    }
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        justifyContent: `center`,
        alignItems: `center`,
        margin: `0`,
    },
    container: {
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,
    },
    grid: {
        height: "16vh",
        margin: `10px`
    },
    avatar: {
        height: "14vh",
        width: "14vh",
        border: `3px`,
        borderStyle: `solid`,
        borderColor: theme.palette.primary.main
    },
    font: {
        fontSize: "24px",
        color: '#181D27'
    },
    paper: {
        height: "14vh",
        backgroundColor: theme.palette.primary.main,
        border: `3px`,
        borderStyle: `solid`,
        borderColor: `white`,
        width: `100%`
    },
    typography: {
        padding: `15px`,
        color: `white`,
        [theme.breakpoints.down('md')]: {
            fontSize: `.6rem`
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: `.8rem`
        }
    },
    gridBits: {
        justifyContent: `center`,
        alignItems: `center`,
        display: `flex`
    }
}));

const PicRightBioLeft: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid className={classes.grid} container item xs={12} spacing={3}>
            <Grid className={classes.gridBits} item xs={9}>
                <Paper className={classes.paper}>
                    <Typography className={classes.typography}>
                        {props.props.bio}
                    </Typography>
                </Paper>
            </Grid>
            <Grid className={classes.gridBits} item xs={3}>
                <Avatar className={classes.avatar} alt={props.props.name} src={props.props.img} />
            </Grid>
        </Grid>
    )
};

export default PicRightBioLeft;
