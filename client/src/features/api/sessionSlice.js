import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	token: null,
	username: null,
	email: null,
	message: null,
	currentTask: {},
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
			(state.id = action.payload.id),
				(state.token = action.payload.token),
				(state.username = action.payload.username),
				(state.email = action.payload.email),
				(state.message = action.payload.message);
		},
		currentTask: (state, action) => {
			state.currentTask = action.payload;
		},
		clearCurrentTask: state => {
			state.currentTask = {};
		},
	},
});

export const { sessionIn, currentTask, clearCurrentTask } =
	sessionSlice.actions;
