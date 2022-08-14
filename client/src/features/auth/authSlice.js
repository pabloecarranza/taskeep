import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: null,
	status: null,
	notifier: '',
	isLoading: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		startLoading: (state /* action */) => {
			state.isLoading = true;
		},
		setAuth: (state, action) => {
			state.isLoading = false;
			state.token = action.payload.token;
			state.status = action.payload.status;
			state.notifier = action.payload.notifier;
		},
	},
});

export const { signUpAction } = authSlice.actions;

export default authSlice.reducer;
