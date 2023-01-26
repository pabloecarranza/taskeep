import { createSlice } from '@reduxjs/toolkit';

interface SessionState {
	id: string;
	token: string;
	username: string;
	email: string;
	message: string;
	logged: boolean;
	currentTask: object;
	currentTab: string;
}
const initialState: SessionState = {
	id: '',
	token: '',
	username: '',
	email: '',
	message: '',
	logged: false,
	currentTask: {},
	currentTab: '',
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
			state.currentTab = action.payload.currentTab;
		},
		sessionOut: state => {
			state.id = '';
			state.token = '';
			state.currentTask = {};
			state.username = '';
			state.email = '';
			state.message = '';
			state.logged = false;
			state.currentTab = '';

			logout();
		},
		currentTask: (state, action) => {
			state.currentTask = action.payload;
		},
		clearCurrentTask: state => {
			state.currentTask = {};
		},
		currentTab: (state, action) => {
			state.currentTab = action.payload;
		},
	},
});

export const {
	sessionIn,
	sessionOut,
	currentTask,
	clearCurrentTask,
	currentTab,
} = sessionSlice.actions;
