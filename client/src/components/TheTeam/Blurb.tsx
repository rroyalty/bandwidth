
import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core"
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
        [theme.breakpoints.down('xl')]: {
            fontSize: `.8rem`
        }
    },
    gridBits: {
        justifyContent: `center`,
        alignItems: `center`,
        display: `flex`
    }
}));

const Blurb: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid className={classes.gridBits} item xs={9}>
            <Paper className={classes.paper}>
                <Typography className={classes.typography}>
                    {`${props.props.name}: ${props.props.bio}`}
                </Typography>
            </Paper>
        </Grid>
    )
};

export default Blurb;
