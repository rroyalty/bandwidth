import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



export const EditProfile = () => {
  
    const [displayName, setDisplayName] = useState('')
    const [status, setStatus] = useState('')
    const [bandName, setBandName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')

    // const dispatch = useDispatch();
    // not sure if i need the below quite yet
    const history = useHistory();

    const onDisplayNameChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setDisplayName(e.target.value)
    const onStatusChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setStatus(e.target.value)
    const onBandNameChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setBandName(e.target.value)
    const onPhoneChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setPhone(e.target.value)
    const onEmailChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)
    const onLocationChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setLocation(e.target.value)
    
    // button click is working, will need to 'push' to the state, then to DB? Push to state first, worry about DB later
    const onUpdateProfileClicked = () => {
       console.log('button clicked')
        }
  
    return (
        <section className="bg">
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
                id='status'
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
            </form>
            {/* add this to below onClick={onUpdateProfileClicked} */}
            <button type="button" onClick={onUpdateProfileClicked} >Save</button>
            <button type="button">Discard</button>
        </section>
        )
    }

export default EditProfile