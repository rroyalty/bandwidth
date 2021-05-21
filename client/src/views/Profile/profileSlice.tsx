import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import Profile from './Profile'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

// might need an axios.put(/api/users, profilePayload)

export const userProfileThunk = createAsyncThunk('profile/userProfileUpate',
    async (profilePayload:any, thunkAPI) => {
        const response = await axios.post('/api/users', profilePayload)
        return response.data
    })

interface IProfileState { id: any, displayName: string, firstName: string, lastName: string, intentionStatus: string, bandName: any, phone: any, email: any, location: any };
interface IProfileSliceState {
    profile: IProfileState;
    isSubmitting: boolean

}


export const initialState: IProfileSliceState = {
    profile: { id: '1', displayName: 'Toni Powell', firstName: 'Toni', lastName: 'Powell', intentionStatus: 'unavailable', bandName: 'The Breakdown Baes', phone: '8888888888', email: 'email@email.com', location: 'Boston, MA'},
    isSubmitting: false,
}

interface IPrepare {
        id: string;
        displayName: string;
        firstName: string;
        lastName: string
        intentionStatus: string;
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
    },
    extraReducers: (builder) =>{
        builder.addCase(userProfileThunk.fulfilled, (state, action: PayloadAction<IPrepare>) => {
            state.profile = action.payload
            state.isSubmitting = false
   
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