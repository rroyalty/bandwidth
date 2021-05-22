
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
        justifyContent: `center`,
        alignItems: `center`,
        '& container': {

        }
    },
    avatar: {
        height: "150px",
        width: "150px"
    },
    font: {
        fontSize: "24px",
        color: '#181D27'
    }
}));

const PicLeftBioRight: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid className={classes.grid} container item xs={12} spacing={3}>
            <Grid item xs={4}>
                <Avatar className={classes.avatar} alt={props.props.name} src={props.props.img} />
            </Grid>
            <Grid item xs={8}>
                <Paper>
                    <Typography>
                        {props.props.bio}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
};

export default PicLeftBioRight;



