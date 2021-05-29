import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme} from '@material-ui/core';
import API from "../../utils/API";
import { TextField, MenuItem, Container, Typography } from '@material-ui/core';

export interface ISearchStatus {
    status:string, 
    setSearchStatus:Function
}

const useStyles = makeStyles((theme: Theme) =>
createStyles({
        header: {
            color: `white`,
            marginTop: `70px`,
            height: `70px`,
            display: `flex`,
            flexDirection: `row`,
            backgroundColor: `rgba(24, 29, 39, .8)`,
            justifyContent: `center`,
            alignItems: `center`,
            width: `100%`,
            border: `0px`,
            borderBottom: `2px`,
            borderStyle: `solid`,
            borderColor: `white`

        },
        textField: {
            width: `300px`,
            color: `white`,
        },
        typography: {
            paddingRight: `25px`
        }
    })
)

const SearchStatus: React.FC <ISearchStatus> = (props): JSX.Element => {

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

    const classes = useStyles();
    return (
        <Container maxWidth={`xl`} className={classes.header}>
            <Typography className={classes.typography}>Filter by Intention Status: </Typography>

            <TextField
                className={classes.textField}
                InputProps={{className: classes.textField}}
                id="status"
                select
                variant="outlined"
                onChange={handleChange}
                color="secondary"
            >
                {statuses.map((status) => (
                    <MenuItem key={status.value} value={status.value}>
                        {status.label}
                    </MenuItem>
                ))}
            </TextField>
        </Container>

    )
}

export default SearchStatus

