import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const SIGNUP_URL = "http://localhost:4000/signup";
const SIGNIN_URL = "http://localhost:4000/signin";

const initialState = {
  username: "",
  password: "",
  email: "",
};

export const signUpPost = (credent) => async () => {
  try {
    const laresp = await axios.post(SIGNUP_URL, credent);
    console.log(laresp);
  } catch (error) {
    console.log(error);
  }
};

export const signInPost = (credent) => async () => {
  try {
    const laresp = await fetch(SIGNIN_URL, {
      method: "POST",
      body: JSON.stringify(credent),
      credentials: "include", // added this part
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(laresp);
  } catch (error) {
    console.log(error);
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpAction: (state, action) => {
      console.log("action", action.payload);
    },
  },
});

export const { signUpAction } = authSlice.actions;

export default authSlice.reducer;
