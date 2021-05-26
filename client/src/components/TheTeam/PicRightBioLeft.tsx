
import React from 'react';
import { Grid } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Blurb from './Blurb'
import Avatar from './AvatarComp'

interface IProps {
    props: {
        id: number,
        name: string,
        img: string,
        bio: string
    }
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    grid: {
        position: `relative`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `16vh`,
        margin: `10px`,
        display: `flex`
    }
}));

const PicRightBioLeft: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid className={classes.grid} container item xs={12} spacing={3}>
            <Blurb props={props.props} />
            <Avatar props={props.props} />
        </Grid>
    )
};

export default PicRightBioLeft;
