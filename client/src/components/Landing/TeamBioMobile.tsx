import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Container } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import teamJSON from './devTeam.json'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem'



const TeamBio: React.FC = (): JSX.Element => {
    // const classes = useStyles();
    const theme = useTheme();

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
            <Carousel>
                {
                    shufArray.map ((item) => <CarouselItem key={item.id} props={item} /> )
                }
            </Carousel>)
};

export default TeamBio;
