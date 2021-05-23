import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import {  TextField, MenuItem } from '@material-ui/core';
import './style.css'

const SearchStatus = () => {
    const [status, setSearchStatus ] = useState()
    const [results, setFilteredResults] = useState()

    const handleChange = (event: { target: { value: any; }; }) => {
        let statusSearch = event.target.value;
        // setSearchStatus(statusSearch);
        const filteredResults = statusSearch.filter((result: { intentionStatus: string; }) => result.intentionStatus === status)
        console.log(filteredResults)
        // console.log(search)
    }

    useEffect(() => {
        API.getAllUsers().then(res => {
            const results = res.data;
            // const filteredResults = results.filter((result: { intentionStatus: string; }) => result.intentionStatus === status)
            // console.log(filteredResults)
            // if (!results) return <> </>
        //    setFilteredResults (filteredResults)
        })
    },[])
    console.log(results)

    const statuses = [
        {
            value: 'Looking to join a band',
            label: 'Looking to join a band',
        },
        {
            value: 'Looking for a Musician',
            label: 'Looking for a Musician',
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
    // value={intentionStatus}
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