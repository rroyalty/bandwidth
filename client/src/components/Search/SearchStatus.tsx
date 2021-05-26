import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { TextField, MenuItem, Button } from '@material-ui/core';
import './style.css';

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


    return (
        <div>

            <TextField
                id="status"
                select
                label="Select Status"
                className="paddingfix"
                helperText="Select Status to Search"
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

