import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import Profile from './Profile'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
// update intial state to match 'intial profile'
// status: available
// phone # 888-888-8888
// email = email from auth0


export const userProfileThunk = createAsyncThunk('profile/userProfileUpate',
    async (profilePayload:any, thunkAPI) => {
        const response = await axios.post('/api/users', profilePayload)
        return response.data
    })

interface IProfileState { id: any, displayName: string, status: string, bandName: any, phone: any, email: any, location: any };
interface IProfileSliceState {
    profile: IProfileState;
    isSubmitting: boolean

}


export const initialState: IProfileSliceState = {
    profile: { id: '1', displayName: 'Toni Powell', status: 'unavailable', bandName: 'The Breakdown Baes', phone: '8888888888', email: 'email@email.com', location: 'Boston, MA'},
    isSubmitting: false,
}

interface IPrepare {
        id: string;
        displayName: string;
        status: string;
        bandName: string;
        phone: string;
        email: string;
        location: string;
    }


export const profileSlice = createSlice({
    //   profileUpdated get's called here 
    name: 'profile',
    initialState,
    reducers: {
        profileAdded: (state, action: PayloadAction<IPrepare>) => {
            // state = action.payload 
                state.profile = action.payload
            },
        // profileUpdated: (state, action: PayloadAction<IPrepare>) => {
        //     const {id, displayName, status, bandName, phone, email, location} = action.payload
        //     console.log(action.payload)
        //     let existingProfile = state.find(profile => profile.id === profile)
        //     if (existingProfile) {
        //         existingProfile = action.payload
        //     }

        // }
    },
    extraReducers: (builder) =>{
        builder.addCase(userProfileThunk.fulfilled, (state, action: PayloadAction<IPrepare>) => {
            state.profile = action.payload
            state.isSubmitting = false
            // const {id, displayName, status, bandName, phone, email, location} = action.payload
            // console.log(action.payload)
            // let existingProfile = state.find(profile => profile.id === profile)
            // if (existingProfile) {
            //     existingProfile = action.payload
            // }
        });
        // change this one to .pending, no overload matches error
        builder.addCase(userProfileThunk.pending, (state) => {
           state.isSubmitting = true; 
        })
        // if failed,send message to user
        builder.addCase(userProfileThunk.rejected, (state, action:any) => {
        //  state.errorMessage = action.error.message 
            state.isSubmitting = false
        })
    }
})

export const { profileAdded } = profileSlice.actions
export const selectProfile = (state: RootState) => state.profile
export default profileSlice.reducer