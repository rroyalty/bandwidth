import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import { profileUpdated } from './profileSlice'
export const EditProfile = () => {
    // intention status (available / unavailable)
    // band name
    // phone
    // email
    // location
    const [displayName, setDisplayName] = useState('')
    const [status, setStatus] = useState('')
    const [bandName, setBandName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')

    const dispatch = useDispatch();
    // not sure if i need the below quite yet
    // const history = useHistory();

    const onDisplayNameChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setDisplayName(e.target.value)
    const onStatusChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setStatus(e.target.value)
    const onBandNameChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setBandName(e.target.value)
    const onPhoneChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setPhone(e.target.value)
    const onEmailChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)
    const onLocationChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setLocation(e.target.value)
    
    // const onUpdateProfileClicked = () => {
    //     if (status || bandName || phone || email || location) {
    //         dispatch(profileUpdated({displayName, status, phone, email, location}))
    //         // what am I pushing to history?
    //         // history.push(``)
    //     }
    // }
    return (
        <section>
            <h2>Edit Profile</h2>
            <form>
                <label htmlFor="editProfile">Edit Profile</label>
                <input 
                type='text'
                id='displayName'
                placeholder='Display Name'
                value={displayName}
                onChange={onDisplayNameChanged}
                />
                 <input 
                type='text'
                id='displayName'
                placeholder='Available, or Unavailable?'
                value={status}
                onChange={onStatusChanged}
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
                placeholder='Display Name'
                value={phone}
                onChange={onPhoneChanged}
                />
                <input 
                type='text'
                id='email'
                placeholder='Display Name'
                value={email}
                onChange={onEmailChanged}
                />
                <input 
                type='text'
                id='location'
                placeholder='Display Name'
                value={location}
                onChange={onLocationChanged}
                />
            </form>
            {/* add this to below onClick={onUpdateProfileClicked} */}
            <button type="button" >Save</button>
            <button type="button">Discard</button>
        </section>
    )
}