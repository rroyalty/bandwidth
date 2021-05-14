import { createSlice, nanoid } from '@reduxjs/toolkit'

// update intial state to match 'intial profile'
// status: available
// phone # 888-888-8888
// email = email from auth0
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'Another post!' }
  ]

//   const profileSlice = createSlice({
  //profileUpdated get's called here 
//   })