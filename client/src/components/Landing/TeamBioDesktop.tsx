import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, Paper, Container, Avatar, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import teamJSON from './devTeam.json'
import PicLeftBioRight from './PicLeftBioRight'
import PicRightBioLeft from './PicRightBioLeft'

const useStyles = makeStyles((theme: Theme) => createStyles({
    grid: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        maxHeight: `100%`,
    },
    font: {
        fontSize: "24px",
        color: '#181D27'
    }
}));


const TeamBio: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const arrayShuf = (array: Array<any>): Array<any> => {
        let j: number = 0;
        let temp: number;

        for (let i = 0; i < 5; i++) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    const shufArray: Array<any> = arrayShuf(teamJSON);

    return (
        <>
            <Grid container item xs={12} spacing={3}>
                <Grid className={classes.grid} item xs={12} spacing={3}>
                    <Typography className={classes.font}>Bandwidth brought to you by...</Typography>
                </Grid>
                {
                    shufArray.map(item => (
                        shufArray.indexOf(item) % 2 == 0 ? < PicLeftBioRight key={item.id} props={item} /> : < PicRightBioLeft key={item.id} props={item} />
                    ))
                }
            </Grid>
        </>
    )
};

export default TeamBio;
