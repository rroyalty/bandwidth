import { createSlice, nanoid } from '@reduxjs/toolkit'

// update intial state to match 'intial profile'
// status: available
// phone # 888-888-8888
// email = email from auth0
const initialState = [
    { id: nanoid(), displayName: 'Toni Powell', bandName: 'Hello!', phone: '888-888-8888', email: 'email@email.com', location: 'Boston, MA'},
    // { id: '2', title: 'Second Post', content: 'Another post!' }
  ]

  const profileSlice = createSlice({
//   profileUpdated get's called here 
name: 'profile',
initialState,
reducers: {
    profileAdded: {
        reducer(state,action) {
            state.push(action.payload)
        }, 
        // payload here (mini-model)
        prepare(displayName, bandName, phone, email, location) {
            return {
                payload: {
                    // id: nanoid(),
                    displayName, 
                    bandName,
                    phone,
                    email, 
                    location
                }
            }
        }
    },
    profileUpdated(state, action){
        const {id, displayName, bandName, phone, email, location} = action.payload
        const existingProfile = state.find(profile => profile.id === id)
        if (existingProfile) {
            existingProfile.displayName = displayName,
            existingProfile.bandName = bandName,
            existingProfile.phone = phone,
            existingProfile.email = email,
            existingProfile.location = location
        }
    }
}
})
export const { profileAdded, profileUpdated } = profileSlice.actions
export default profileSlice.reducer