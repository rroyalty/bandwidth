import React, {useEffect} from 'react';
import { Box } from "@material-ui/core"
import { makeStyles, createStyles  } from "@material-ui/core/styles";
import teamJSON from '../../static/devTeam.json'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../../components/TheTeam/CarouselItem'

const useStyles = makeStyles(() => createStyles({
    root: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
    }
}));

const TeamBioMobile: React.FC = (): JSX.Element => {
    const classes = useStyles();

    useEffect(() => {
        return () => {
         console.log(`component unmounted`)
        };
      }, []); 

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
        <Carousel animation={"slide"} interval={10000}>
            { shufArray.map((item) =>
                <Box className={classes.root} key={item.id}>
                    <CarouselItem props={item} />
                </Box>)}
        </Carousel>
    )
};

export default TeamBioMobile;
