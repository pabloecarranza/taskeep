import { createSlice } from '@reduxjs/toolkit';

interface SessionState {
	id: string,
	token: string,
	username: string,
	email: string,
	message: string,
	logged: boolean,
	currentTask: object,
}
const initialState: SessionState = {
	id: '',
	token: '',
	username: '',
	email: '',
	message: '',
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
		sessionIn: (state, action) => {
			state.id = action.payload.id;
			state.token = action.payload.token;
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.message = action.payload.message;
			state.logged = action.payload.logged;
		},
		sessionOut: state => {
			state.id = '';
			state.token = '';
			state.currentTask = {};
			state.username = '';
			state.email = '';
			state.message = '';
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
