import { withRouter } from 'react-router';
import React, {useState} from 'react';

import UserCard from '../../components/Users/UserCards';
import SearchStatus from '../../components/Search/SearchStatus';
import './style.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: `flex`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: "100vh",
    justifyContent: `center`,

  },
    header: {
        backgroundColor: `rgba(255, 255, 255, 0.8)`,
        paddingTop: 50,
        justifyContent: `center`,
        alignItems: `center`,
        textAlign: `center`,
        padding: 10,

    },

})
)

const Find: React.FC = (): JSX.Element => {
    let bgArray: Array<number> = [1, 2, 3, 4]

    const arrayShuf = (array: Array<number>): Array<number> => {
      let j: number = 0;
      let temp: number;
  
      for (let i = array.length - 1; i >= array.length - 3; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
  
      return array;
    }
  
    const shufArray: Array<number> = arrayShuf(bgArray);
    const classes = useStyles();

const [status, setSearchStatus] = useState("");

    return (
            <div className={classes.header}style={{ backgroundImage: `url(/backgrounds/loggedinbg${shufArray[0]}.jpg)` }}>
            <SearchStatus status={status} setSearchStatus={setSearchStatus} />
            {/* <div> */}

            <UserCard status={status}>
                {/* <h2>Can also render children components here</h2> */}
            </UserCard>
                 {/* </div> */}
            </div>
    )
}

export default withRouter(Find);