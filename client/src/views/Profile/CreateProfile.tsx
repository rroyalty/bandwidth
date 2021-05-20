
import React, { useState } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userProfileThunk } from './profileSlice';




export const CreateProfile = ({ match }: { match: any }) => {
// update this to have firstname / lastname fields in form / state
    const { profileID } = match.params

    const [nickName, setNickName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [intentionStatus, setIntentionStatus] = useState('')
    const [bandName, setBandName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
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
    const onEmailChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)
    const onLocationChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setLocation(e.target.value)
    const onBlurbChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setBlurb(e.target.value)

    
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


    return (
        <section className="bg">
            <h2>Edit Profile</h2>
            <form>
                <label htmlFor="editProfile">Edit Profile</label>
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
                {/* <select onChange={onIntentionStatusChanged}>
                    <option value={intentionStatus}>Available</option>
                    <option value={intentionStatus}>Unavailable</option>
                    <option selected defaultValue={intentionStatus}>Looking to Network</option>
                </select> */}
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
            </form>
            {/* add this to below onClick={onUpdateProfileClicked} */}
            <button type="button" onClick={onUpdateProfileClicked} >Save</button>
            <button type="button">Discard</button>
        </section>
    )

}

export default CreateProfile