import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { useAuth0, User } from "@auth0/auth0-react";

// might need an axios.put(/api/users, profilePayload)
// ===================================================================================
// Redux black magic
// ===================================================================================

const user = useAuth0();

// const oidc = user.user.sub


export const editProfileThunk = createAsyncThunk('profile/userProfileUpate',

    async (profilePayload:any, thunkAPI) => {
        // add ${oidc} to below on axios.put
        const response = await axios.put(`/api/users/`, profilePayload)
        return response.data
    })

interface IProfileState { oidc: any, nickName: string, firstName: string, lastName: string, intentionStatus: string, bandName: any, phone: any, email: any, location: any, blurb: any};
interface IProfileSliceState {
    profile: IProfileState;
    isSubmitting: boolean

}


export const initialState: IProfileSliceState = {
    profile: { oidc: '1', nickName: 'Toni Powell', firstName: 'Toni', lastName: 'Powell', intentionStatus: 'unavailable', bandName: 'The Breakdown Baes', phone: '8888888888', email: 'email@email.com', location: 'Boston, MA', blurb: 'I play a mean double bass... and like 3 chords on guitar.'},
    isSubmitting: false,
}

interface IPrepare {
        oidc: string;
        nickName: string;
        firstName: string;
        lastName: string
        intentionStatus: string;
        bandName: string;
        phone: string;
        email: string;
        location: string;
        blurb: string;
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
        builder.addCase(editProfileThunk.fulfilled, (state, action: PayloadAction<IPrepare>) => {
            state.profile = action.payload
            state.isSubmitting = false
   
        });
        // change this one to .pending, no overload matches error
        builder.addCase(editProfileThunk.pending, (state) => {
           state.isSubmitting = true; 
        })
        // if failed,send message to user
        builder.addCase(editProfileThunk.rejected, (state, action:any) => {
        //  state.errorMessage = action.error.message 
            state.isSubmitting = false
        })
    }
})

export const { profileAdded } = profileSlice.actions
export const selectProfile = (state: RootState) => state.profile
export default profileSlice.reducer