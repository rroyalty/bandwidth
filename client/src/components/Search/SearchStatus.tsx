import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme} from '@material-ui/core';
import API from "../../utils/API";
import { TextField, MenuItem } from '@material-ui/core';


export interface ISearchStatus {
    status:string, 
    setSearchStatus:Function
}

const SearchStatus: React.FC <ISearchStatus> = (props) => {

    const [users, setUsers] = useState([])


    const handleChange = (event: React.ChangeEvent <HTMLInputElement>) => {
        let statusSearch = event.target.value;
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
            value: 'Musician looking for a Band',
            label: 'Musician looking for a Band',
        },
        {
            value: 'Band looking for Musician',
            label: 'Band looking for Musician',
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
            justifyContent: `center`,
            alignItems: `center`,
            textAlign: `center`,
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

