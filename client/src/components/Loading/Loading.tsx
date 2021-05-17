import React from 'react';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: 'absolute',
    display: `flex`,
    flexDirection: `column`,
    height: `75vh`,
    width: `auto`,
    alignItems: `center`,
    justifyContent: `center`,
    margin: 'auto',
    backgroundColor: `white`
  }
}));

// interface IProps {
//   toggleTheme: () => void;
//   useDefaultTheme: boolean;
//   children: React.ReactNode;
// }

const loadingImg =
  "https://res.cloudinary.com/wnotw/images/c_limit,w_1536,q_auto:eco,f_auto/v1556554491/iq743aytrbnkny0wxozf/giphy-stickers-for-instagram-stories";

const Loading: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <img src={loadingImg} alt="Loading..." />
        <Typography>
          <h5>LOADING</h5>
        </Typography>
    </Box>)
};

export default Loading;

// .spinner {
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   height: 100vh;
//   width: 100vw;
//   background-color: white;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
// }