import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import {  TextField, MenuItem } from '@material-ui/core';
import './style.css'

const SearchStatus = () => {
    const [status, setSearchStatus ] = useState()
    const [results, setFilteredResults] = useState()

    const handleChange = (event: { target: { value: any; }; }) => {
        let statusSearch = event.target.value;
        setSearchStatus(statusSearch);
    }

    useEffect(() => {
        API.getAllUsers().then(res => {
            const results = res.data;
            const filteredResults = results.filter((result: { intentionStatus: string; }) => result.intentionStatus === status)
            console.log(filteredResults)
            if (!results) return <> </>
           setFilteredResults (filteredResults)
        })
    },[])
    console.log(results)
    console.log(status)

    const statuses = [
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


    return(
        <div>

    <TextField
    id="status"
    select
    label="Select Status"
    className="paddingfix"
    onChange={handleChange}
    helperText="Select Status to Search"
    variant="filled"
>
    {statuses.map((status) => (
        <MenuItem key={status.value} value={status.value}>
            {status.label}
        </MenuItem>
    ))}
</TextField>
        {/* {results.map((result: any) => {
            return (
                <div>
                    <li>{results}</li>
                </div>
            )
        })} */}
    </div>

    )
}

export default SearchStatus