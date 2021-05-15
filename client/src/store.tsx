import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../src/views/Profile/profileSlice'
export default configureStore({
  // switch statements will go in reducer file 
  reducer: {
    profile: profileReducer
  },
})