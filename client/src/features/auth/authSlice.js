import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: '',
	password: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signUpAction: (state, action) => {
			console.log('action', action.payload);
		},
	},
});

export const { signUpAction } = authSlice.actions;

export default authSlice.reducer;
