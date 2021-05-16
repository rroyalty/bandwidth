import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import Profile from './Profile'

// update intial state to match 'intial profile'
// status: available
// phone # 888-888-8888
// email = email from auth0

interface IProfileState { id: any, displayName: string, status: string, bandName: any, phone: any, email: any, location: any };
interface IProfileStateArray extends Array<IProfileState> { }

const initialState: IProfileStateArray = [
    { id: '1', displayName: 'Toni Powell', status: 'unavailable', bandName: 'The Breakdown Baes', phone: '8888888888', email: 'email@email.com', location: 'Boston, MA' }
]

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
                state.push(action.payload)
            },
            // payload here (mini-model)
            //  interface goes after prepare, before args prepare<INTERFACE IN HERE>(args)
            prepare(payload) {
                return {
                    payload
                }
            }
        },
        profileUpdated: (state: IProfileStateArray, action: PayloadAction<IPrepare>) => {
            const payload = action.payload
            const existingProfile = state.find(profile => profile.id === payload.id)
            if (existingProfile) {
                existingProfile.displayName = payload.displayName,
                    existingProfile.status = payload.status,
                    existingProfile.bandName = payload.bandName,
                    existingProfile.phone = payload.phone,
                    existingProfile.email = payload.email,
                    existingProfile.location = payload.location
            }
        }
    })
})

export const { profileAdded, profileUpdated } = profileSlice.actions
export const selectProfile = (state: RootState) => state.profile
export default profileSlice.reducer