import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database'
import { db } from "../firebase/firebase";
const initialState = {
  status: false,
  userData: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      state.status = false;
      state.userData = null;
    },
    signup: (state, action) => {
      signup(
        action.payload.auth,
        action.payload.email,
        action.payload.password
      ).then((value) => console.log(value));
    },
    setData: (state, action) => {
      set(ref(db, 'users/'+action.payload.email), {
        username: action.payload.username,
        password: action.payload.password,
      });
    },
  },
});

export const { login, logout, signup,setData } = authSlice.actions;
export default authSlice.reducer;
