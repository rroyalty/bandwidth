import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme} from '@material-ui/core';
import API from "../../utils/API";
import { TextField, MenuItem } from '@material-ui/core';


export interface ISearchStatus {
    status:string, 
    setSearchStatus:Function
}

const SearchStatus: React.FC <ISearchStatus> = (props) => {

    // const [results, setFilteredResults] = useState([])
    const [users, setUsers] = useState([])


    const handleChange = (event: React.ChangeEvent <HTMLInputElement>) => {
        let statusSearch = event.target.value;
        // const filteredResults = users.filter((user: {intentionStatus: string}) => user.intentionStatus === statusSearch)
        // setSearchStatus(statusSearch)
        props.setSearchStatus(statusSearch)
    }


    useEffect(() => {
        API.getAllUsers().then(res => {
            setUsers(res.data)
        })
    }, [])

    
    const statuses = [
        {
            value: '',
            label: 'All Users',
        },
        {
            value: 'Looking to join a band',
            label: 'Looking to join a band',
        },
        {
            value: 'Looking to fill a spot in a band',
            label: 'Looking to fill a spot in a band',
        },
        {
            value: 'Looking to Network',
            label: 'Looking to Network',
        },
    ];

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            backgroundColor: `rgba(255, 255, 255, 0.8)`,
            // paddingTop: 100,
            // paddingLeft: 50,
            justifyContent: `center`,
            alignItems: `center`,
            textAlign: `center`,
            // width: `40vw`,
            // paddingRight: 150
            // height: `30vh`
        },
    })
    )
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <h1>Find Other Musicians</h1>

            <TextField
                id="status"
                select
                label="Select Status"
                helperText="Select a Status to Search"
                variant="filled"
            onChange={handleChange}
            // className={classes.header}
            >
                {statuses.map((status) => (
                    <MenuItem key={status.value} value={status.value}>
                        {status.label}
                    </MenuItem>
                ))}
            </TextField>
            <div>

            </div>
        </div>

    )
}

export default SearchStatus

