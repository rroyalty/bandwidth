import React from 'react';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: `flex`,
    flexDirection: `column`,
    height: `75vh`,
    width: `auto`,
    alignItems: `center`,
    justifyContent: `center`,
    margin: 'auto',
    backgroundColor: `rgba(255,255,255,0)`,
  },
  font: {
    fontSize: `24px`,
    color: `#181D27`
  }
}));

const Loading: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <img src='/giphy-stickers-for-instagram-stories.gif' alt="Loading..." />
        <Typography className={classes.font}>
          LOADING
        </Typography>
    </Box>)
};

export default Loading;