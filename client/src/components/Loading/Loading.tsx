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
          <h5 className={classes.font}>LOADING</h5>
        </Typography>
    </Box>)
};

export default Loading;