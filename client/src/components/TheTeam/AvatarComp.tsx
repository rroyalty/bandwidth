
import React from 'react';
import { Grid, Avatar } from "@material-ui/core"
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
    avatar: {
        height: "14vh",
        width: "14vh",
        border: `3px`,
        borderStyle: `solid`,
        borderColor: theme.palette.primary.main
    },
    gridBits: {
        justifyContent: `center`,
        alignItems: `center`,
        display: `flex`
    }
}));

const AvatarComp: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid className={classes.gridBits} item xs={3}>
            <Avatar className={classes.avatar} alt={props.props.name} src={props.props.img} />
        </Grid>
    )
};

export default AvatarComp;
