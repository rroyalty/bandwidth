import React, { useState } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userProfileThunk } from './profileSlice';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Container, Button } from '@material-ui/core';
import './style.css'
import { useAuth0, User } from "@auth0/auth0-react";

export const CreateProfile = ({ match }: { match: any }) => {
    // update this to have firstname / lastname fields in form / state
    const { profileID } = match.params

    const user: any = useAuth0();

    const [nickName, setNickName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [intentionStatus, setIntentionStatus] = useState('')
    const [bandName, setBandName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState(user.user.email)
    const [location, setLocation] = useState('')
    const [blurb, setBlurb] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();

    const onNickNameChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setNickName(e.target.value)
    const onFirstNameChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setFirstName(e.target.value)
    const onLastNameChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setLastName(e.target.value)
    const onIntentionStatusChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setIntentionStatus(e.target.value)
    const onBandNameChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setBandName(e.target.value)
    const onPhoneChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setPhone(e.target.value)
    const onLocationChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setLocation(e.target.value)
    const onBlurbChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setBlurb(e.target.value)

    // const onEmailChanged = () => setEmail(user.user.email)

    const onUpdateProfileClicked = () => {
        if (nickName || firstName || lastName || intentionStatus || bandName || phone || email || location || blurb) {
            dispatch(userProfileThunk({ id: profileID, firstName, lastName, nickName, intentionStatus, bandName, phone, email, location, blurb }))
            console.log("PROFILE UPDATED ")
            console.log(history)
            setNickName(nickName)
            setFirstName(firstName)
            setLastName(lastName)
            setIntentionStatus(intentionStatus)
            setBandName(bandName)
            setPhone(phone)
            setEmail(email)
            setLocation(location)
            setBlurb(blurb)
            // whatever argument is in .push is what the page redirects to, state updates but is not rendering on page 
            history.push(`/profile/`)
        }
    }
    const onClearClicked = () => {
        setNickName("")
            setFirstName("")
            setLastName("")
            setIntentionStatus("")
            setBandName("")
            setPhone("")
            setEmail("")
            setLocation("")
            setBlurb("")
    }

    const statuses = [
        {
            value: 'Available',
            label: 'Available',
        },
        {
            value: 'Unavailable',
            label: 'Unavailable',
        },
        {
            value: 'Looking to network',
            label: 'Looking to network',
        },
    ];

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                paddingTop: 100,
                margin: theme.spacing(1),
                width: '25ch',
                textAlign: `center`,
                justifyContent: `center`

            },
        }),
    );

    const classes = useStyles();

    return (

        <Container className={classes.root}>
            <h2>Finish Profile</h2>

            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Display Name" value={nickName} onChange={onNickNameChanged} />
                <TextField id="standard-basic" label="First Name" value={firstName} onChange={onFirstNameChanged} />
                <TextField id="standard-basic" label="Last Name" value={lastName} onChange={onLastNameChanged} />
                <TextField
                    id="status"
                    select
                    label="Select Status"
                    value={intentionStatus}
                    onChange={onIntentionStatusChanged}
                    helperText="Please select your status"
                    variant="filled"
                >
                    {statuses.map((status) => (
                        <MenuItem key={status.value} value={status.value}>
                            {status.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField id="standard-basic" label="Band Name" value={bandName} onChange={onBandNameChanged} />
                <TextField id="standard-basic" label="Phone" value={phone} onChange={onPhoneChanged} />
                <TextField disabled id="filled-basic" label="email" variant="filled" value={user.user.email} />
                <TextField id="standard-basic" label="City, State" value={location} onChange={onLocationChanged} />
                <TextField
                    id="outlined-multiline-static"
                    label="Bio"
                    multiline
                    rows={4}
                    defaultValue="Write a little bit about yoruself here"
                    variant="outlined"
                    value={blurb}
                    onChange={onBlurbChanged}
                />
            </form>

            {/* <form>
                <input
                    type='text'
                    id='displayName'
                    placeholder='Display Name / Nick Name'
                    value={nickName}
                    onChange={onNickNameChanged}
                />
                <input
                    type='text'
                    id='firstName'
                    placeholder='First Name'
                    value={firstName}
                    onChange={onFirstNameChanged}
                />
                <input
                    type='text'
                    id='lastName'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={onLastNameChanged}
                />
                <input
                    type='text'
                    id='Status'
                    placeholder='Available, Unavailable, Looking to network?'
                    value={intentionStatus}
                    onChange={onIntentionStatusChanged}
                />
                <input
                    type='text'
                    id='bandName'
                    placeholder='Band Name'
                    value={bandName}
                    onChange={onBandNameChanged}
                />
                <input
                    type='text'
                    id='phone'
                    placeholder='Phone'
                    value={phone}
                    onChange={onPhoneChanged}
                />
                <input
                    type='text'
                    id='email'
                    placeholder='Email'
                    value={email}
                    onChange={onEmailChanged}
                />
                <input
                    type='text'
                    id='location'
                    placeholder='Location'
                    value={location}
                    onChange={onLocationChanged}
                />
                <textarea
                    id='blurb'
                    placeholder='Blurb'
                    value={blurb}
                    onChange={onBlurbChanged}
                >
                </textarea>
            </form> */}

            <Button onClick={onUpdateProfileClicked}>Save Changes</Button>
            <Button color="secondary" onClick={onClearClicked}>Clear</Button>
            {/* <button type="button" onClick={onUpdateProfileClicked} >Save</button> */}
            {/* <button type="button">Discard</button> */}
        </Container>
    )

}

export default CreateProfile