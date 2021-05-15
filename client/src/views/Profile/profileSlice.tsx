import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import Profile from './Profile'

// update intial state to match 'intial profile'
// status: available
// phone # 888-888-8888
// email = email from auth0

interface IInitialState { id:any, displayName:string, status:string, bandName:any, phone:any, email:any, location:any};
interface IInitialStateArray extends Array<IInitialState>{}

const initialState : IInitialStateArray = [
    { id: '1', displayName: 'Toni Powell', status: 'unavailable', bandName: 'The Breakdown Baes', phone: '8888888888', email: 'email@email.com', location: 'Boston, MA'}
]
interface IPrepare {
        payload: {
            id: string;
            displayName: string;
            status: string;
            bandName: string;
            phone: string;
            email: string;
            location: string;
        }
}

  const profileSlice = createSlice({
//   profileUpdated get's called here 
name: 'profile',
initialState,
reducers: {
    profileAdded: {
        reducer(
            state,
            action,
            // action: PayloadAction<typeof Profile[], string, {currentProfile: string}>
            )
            // {
            //     state.all = action.payload
            // },
            {
            state.push(action.payload)
        }, 
        // payload here (mini-model)
        //  interface goes after prepare, before args prepare<INTERFACE IN HERE>(args)
        prepare<IPrepare>({displayName, status, bandName, phone, email, location}:any)
         {
            return {
                payload: {
                    id: nanoid(),
                    displayName, 
                    status,
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
            existingProfile.status = status,
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