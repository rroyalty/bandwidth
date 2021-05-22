
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

const CarouselItem: React.FC<IProps> = (props): JSX.Element => {

    return (
        <Paper>
            <h2>{props.props.name}</h2>
            <p>{props.props.bio}</p>

        </Paper>
    )
};

export default CarouselItem;