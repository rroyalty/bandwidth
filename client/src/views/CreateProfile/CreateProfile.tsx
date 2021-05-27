import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userProfileThunk } from './createProfileSlice';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { MenuItem, Container, Button, TextField } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";

// ================================================
// Form for CREATING a new profile 
// ================================================

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


export const CreateProfile: React.FC = (): JSX.Element =>  {

    const user: any = useAuth0();

    const [oidc, setOIDC] = useState(user.user.sub)
    const [image, setImage] = useState(user.user.picture)
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
        if (nickName || firstName || lastName || intentionStatus || bandName || phone || email || location || blurb) {
            dispatch(userProfileThunk({ oidc: user.user.sub, image, firstName, lastName, nickName, intentionStatus, bandName, phone, email, location, blurb }))
            setOIDC(oidc)
            setImage(image)
            setNickName(nickName)
            setFirstName(firstName)
            setLastName(lastName)
            setIntentionStatus(intentionStatus)
            setBandName(bandName)
            setPhone(phone)
            setEmail(email)
            setLocation(location)
            setBlurb(blurb)
            history.push(`/tempprofile/`)
        }
    }
    const onClearClicked = () => {
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

    const classes = useStyles();

    return (

        <Container className={classes.root}>
            <h2>Finish Creating Your BandWidth Profile</h2>

            <form noValidate autoComplete="on">
                <TextField id="standard-basic" label="Display Name" value={nickName} onChange={onNickNameChanged} />
                <TextField id="standard-basic" label="First Name" value={firstName} onChange={onFirstNameChanged} />
                <TextField id="standard-basic" label="Last Name" value={lastName} onChange={onLastNameChanged} />
                <TextField
                    id="status"
                    select
                    label="Select Status"
                //    value={intentionStatus ? "" }
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
                    // defaultValue="Write a little bit about yourself here"
                    variant="outlined"
                    value={blurb}
                    onChange={onBlurbChanged}
                />
            </form>


            <Button onClick={onUpdateProfileClicked}>Save Changes</Button>
            <Button color="secondary" onClick={onClearClicked}>Clear</Button>

        </Container>
    )

}

export default CreateProfile