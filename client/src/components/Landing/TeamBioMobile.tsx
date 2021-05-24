import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import teamJSON from './devTeam.json'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
    }
}));

const TeamBioMobile: React.FC = (): JSX.Element => {
    const theme = useTheme();
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
        <Carousel animation={"slide"}>
            { shufArray.map((item) =>
                <Box className={classes.root} key={item.id}>
                    <CarouselItem props={item} />
                </Box>)}
        </Carousel>
    )
};

export default TeamBioMobile;
