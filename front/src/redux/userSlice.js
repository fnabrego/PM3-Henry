import { createSlice } from "@reduxjs/toolkit";
import { accessStorage } from "../helpers/storeAction";
const {user, session} =  accessStorage()

const initialState = {
    
    userData: {login: session, user:user},
    userAppointments:[]
}

export const userSlice = createSlice({
    name: 'actualUser',
    initialState,
    reducers: {
      setUserData: (state, action) => {
        state.userData.login = action.payload;
        state.userData.user = action.payload;
      },
      setUserAppointments: (state, action) => {
        state.userAppointments = action.payload;
      },
    },
  });

  export const {setUserData, setUserAppointments} = userSlice.actions;
  export default userSlice.reducer;