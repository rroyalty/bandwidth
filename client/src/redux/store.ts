
import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../views/CreateProfile/createProfileSlice'
import editProfileReducer from '../views/EditProfile/editProfileSlice'

export const store = configureStore({
  // switch statements will go in reducer file
  reducer: {
    profile: profileReducer,
    editprofile: editProfileReducer
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch