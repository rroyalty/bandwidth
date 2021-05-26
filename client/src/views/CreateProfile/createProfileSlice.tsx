import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

// might need an axios.put(/api/users, profilePayload)
// ===================================================================================
// Redux black magic. 
// This updates the state with the information that the user has put in the 'create profile' form, 
// and sends that info to the DB
// ===================================================================================

export const userProfileThunk = createAsyncThunk('profile/userProfileUpate',
    async (profilePayload:any, thunkAPI) => {
        const response = await axios.post('/api/users', profilePayload)
        return response.data
    })

interface IProfileState { oidc: any, image: string, nickName: string, firstName: string, lastName: string, intentionStatus: string, bandName: any, phone: any, email: any, location: any, blurb: any};
interface IProfileSliceState {
    profile: IProfileState;
    isSubmitting: boolean

}


export const initialState: IProfileSliceState = {
    profile: { oidc: '1', image: 'https://s.gravatar.com/avatar/12acf84782b7587a12f01f5d6b87f8ff?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fto.png', nickName: 'Toni Powell', firstName: 'Toni', lastName: 'Powell', intentionStatus: 'unavailable', bandName: 'The Breakdown Baes', phone: '8888888888', email: 'email@email.com', location: 'Boston, MA', blurb: 'I play a mean double bass... and like 3 chords on guitar.'},
    isSubmitting: false,
}

interface IPrepare {
        oidc: string;
        nickName: string;
        image: string;
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