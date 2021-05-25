import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'



// might need an axios.put(/api/users, profilePayload)
// ===================================================================================
// Redux black magic
// ===================================================================================


    // const [user, setUser] = useState()
    // const userProfile: any = useAuth0();
    
    // useEffect(() => {
    //     API.getUser(userProfile.user.email).then(res => {
    //         const findUser = res.data;
    //         console.log(findUser)
    //         setUser(findUser)
    //     })
    // }, [])


export const editProfileThunk = createAsyncThunk('profile/userProfileUpate', 
async (profilePayload:any, thunkAPI) => {
        const email = profilePayload.email
        
        const response = await axios.put(`/api/users/${email}`, profilePayload)
        return response.data
    })

interface IProfileState { oidc: any, nickName: string, firstName: string, lastName: string, intentionStatus: string, bandName: any, phone: any, email: any, location: any, blurb: any};
interface IProfileSliceState {
    profile: IProfileState;
    isSubmitting: boolean

}


export const initialState: IProfileSliceState = {
    profile: { oidc: '1', nickName: 'Toni Powell', firstName: 'Toni', lastName: 'Powell', intentionStatus: 'unavailable', bandName: 'Breakdowns, Breakdown', phone: '8888888888', email: 'email@email.com', location: 'Boston, MA', blurb: 'If you are seeing this, something went wrong :( Please reach out to the dev team and we would be happy to take a looksey for you!'},
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


export const editProfileSlice = createSlice({
    //   profileUpdated get's called here 
    name: 'profile',
    initialState,
    reducers: {
        profileUpdated: (state, action: PayloadAction<IPrepare>) => {
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
            // state.errorMessage = action.error.message 
            state.isSubmitting = false
        })
    }
})


export const { profileUpdated } = editProfileSlice.actions
export const selectProfile = (state: RootState) => state.profile
export default editProfileSlice.reducer