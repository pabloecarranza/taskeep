import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	token: null,
	username: null,
	email: null,
	message: null,
	logged: false,
	currentTask: {},
};

const logout = () => {
	localStorage.removeItem('identified-user');
};

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1;
		},
		decrement: state => {
			state.value -= 1;
		},
		sessionIn: (state, action) => {
			state.id = action.payload.id;
			state.token = action.payload.token;
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.message = action.payload.message;
			state.logged = action.payload.logged;
		},
		sessionOut: state => {
			state.id = null;
			state.token = null;
			state.currentTask = {};
			state.username = null;
			state.email = null;
			state.message = null;
			state.logged = false;

			logout();
		},
		currentTask: (state, action) => {
			state.currentTask = action.payload;
		},
		clearCurrentTask: state => {
			state.currentTask = {};
		},
	},
});

export const { sessionIn, sessionOut, currentTask, clearCurrentTask } =
	sessionSlice.actions;
