import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
	id?: string;
	completed: boolean;
	important: boolean;
	description: string;
	reminder: string;
	expiration_date: string;
	repeat: string;
	notes: string;
	listid: string;
	userid: string;
}

interface SessionState {
	id: string;
	token: string;
	username: string;
	email: string;
	message: string;
	logged: boolean;
	currentTask: Task;
	currentTab: string;
}

const initialState: SessionState = {
	id: '',
	token: '',
	username: '',
	email: '',
	message: '',
	logged: false,
	currentTask: {
		completed: false,
		important: false,
		description: '',
		reminder: 'YYYY-MM-DD',
		expiration_date: '',
		repeat: 'YYYY-MM-DD',
		notes: '',
		listid: '',
		userid: '',
	},
	currentTab: '',
};

const logout = () => {
	localStorage.removeItem('identified-user');
};

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		sessionIn: (state, action: PayloadAction<SessionState>) => {
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
			state.currentTask = {
				completed: false,
				important: false,
				description: '',
				reminder: 'YYYY-MM-DD',
				expiration_date: '',
				repeat: 'YYYY-MM-DD',
				notes: '',
				listid: '',
				userid: '',
			};
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
			state.currentTask = {
				completed: false,
				important: false,
				description: '',
				reminder: 'YYYY-MM-DD',
				expiration_date: '',
				repeat: 'YYYY-MM-DD',
				notes: '',
				listid: '',
				userid: '',
			};
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
