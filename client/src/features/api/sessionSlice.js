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
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
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
