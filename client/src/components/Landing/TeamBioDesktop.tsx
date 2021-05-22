import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, Paper, Container, Avatar, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import teamJSON from './devTeam.json'
import PicLeftBioRight from './PicLeftBioRight'
import PicRightBioLeft from './PicRightBioLeft'

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
        alignItems: `center`
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


const TeamBio: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const arrayShuf = (array: Array<any>): Array<any> => {
      let j: number = 0;
      let temp: number;
  
      for (let i = 0; i < 5 ; i++) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
  
      return array;
    }
  
    const shufArray: Array<any> = arrayShuf(teamJSON);

    return (
        <Container className={classes.root}>
            <Grid className={classes.grid} container item xs={12} spacing={3}>
                <Typography className={classes.font}>Bandwidth brought to you by...</Typography>
            </Grid>
            <Grid className={classes.grid} container item xs={12} spacing={3}>
                {shufArray.map(item => (
                    shufArray.indexOf(item)%2 == 0 ? < PicLeftBioRight key={item.id} props={item}/> : < PicRightBioLeft key={item.id} props={item}/>
                ))}
            </Grid>
        </Container>)
};

export default TeamBio;
