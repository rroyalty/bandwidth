import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProfileThunk } from './editProfileSlice';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MenuItem, Container, Button, TextField } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";

// ================================================
// Form for EDITING a current profile 
// ================================================

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        center: {
            backgroundColor: `rgba(255, 255, 255, 0.8)`,
            paddingTop: 100,
            width: '25ch',
            textAlign: `center`,
            justifyContent: `center`,
        },
    }),
);

export const EditProfile: React.FC = (): JSX.Element => {

    const user: any = useAuth0();

    const [oidc, setOIDC] = useState(user.user.sub)
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


    const onUpdateProfileClicked = () => {
        if (nickName || firstName || lastName || intentionStatus || bandName || phone || location || blurb) {
            dispatch(editProfileThunk({ oidc: user.user.sub, firstName, lastName, nickName, intentionStatus, bandName, phone, email, location, blurb }))
            setOIDC(oidc)
            setNickName(nickName)
            setFirstName(firstName)
            setLastName(lastName)
            setIntentionStatus(intentionStatus)
            setBandName(bandName)
            setPhone(phone)
            setEmail(email)
            setLocation(location)
            setBlurb(blurb)
            history.push(`/prevprofile/`)
        }
    }
    const onClearForm = () => {
        setNickName("")
        setFirstName("")
        setLastName("")
        setIntentionStatus("")
        setBandName("")
        setPhone("")
        setLocation("")
        setBlurb("")
    }


    const statuses = [
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
            <Container className={classes.center}>
                <h2>Edit Profile</h2>

                <form noValidate autoComplete="on">
                    <TextField id="standard-basic" label="Display Name" value={nickName} onChange={onNickNameChanged} />
                    <TextField id="standard-basic" label="First Name" value={firstName} onChange={onFirstNameChanged} />
                    <TextField id="standard-basic" label="Last Name" value={lastName} onChange={onLastNameChanged} />
                    <TextField
                        id="status"
                        select
                        label="Select Status"
                        value={intentionStatus || ""}
                        onChange={onIntentionStatusChanged}
                        helperText="Please select your status"
                        variant="standard"
                    >
                        {statuses.map((status) => (
                            <MenuItem key={status.value} value={status.value}>
                                {status.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="standard-basic" label="Band Name" variant="standard" value={bandName} onChange={onBandNameChanged} />
                    <TextField id="standard-basic" label="Phone" variant="standard" value={phone} onChange={onPhoneChanged} />
                    <TextField disabled id="filled-basic" label="email" variant="filled" value={user.user.email} />
                    <TextField id="standard-basic" label="City, State" variant="standard" value={location} onChange={onLocationChanged} />
                    <TextField
                        id="outlined-multiline-static"
                        label="Bio"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={blurb}
                        onChange={onBlurbChanged}
                    />
                </form>


                <Button onClick={onUpdateProfileClicked}>Save Changes</Button>
                <Button color="secondary" onClick={onClearForm}>Clear</Button>

            </Container>
    )

}

export default EditProfile
