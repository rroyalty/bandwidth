import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const EditProfile = () => {
    // intention status (available / unavailable)
    // band name
    // phone
    // email
    // location

    const [status, setStatus] = useState('')
    const [bandName, setBandName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')

    const dispatch = useDispatch();

    const onStatusChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setStatus(e.target.value)
    const onBandNameChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setBandName(e.target.value)
    const onPhoneChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setPhone(e.target.value)
    const onEmailChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)
    const onLocationChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setLocation(e.target.value)
    
    const onUpdateProfileClicked = () => {
        if (status || bandName || phone || email || location) {
            // dispatch(profileUpdated({status, phone, email, location}))
            // create profileUpdated in profileSlice.tsx
        }
    }
}