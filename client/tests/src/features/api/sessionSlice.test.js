import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import {
	clearCurrentTask,
	currentTask,
	sessionIn,
	sessionOut,
	sessionSlice,
} from '../../../../src/features/api/sessionSlice';

describe('Name of the group', () => {
	const initialState = {
		id: null,
		token: null,
		username: null,
		email: null,
		message: null,
		logged: false,
		currentTask: {},
	};

	const loggedser = {
		message: 'Login successfully',
		id: '654',
		username: 'Invited',
		email: 'test@test.com',
		token: '654sdt24dssdtttt4654et234',
		logged: true,
		currentTask: {},
	};

	const selectedTask = {
		completed: true,
		important: true,
		description: 'this field must have something',
		reminder: '1354-65-65',
		expiration_date: '',
		repeat: '2022-22-66',
		notes: 'more test over here',
		listid: ' 654',
		userid: '32',
	};

	it('should session in', () => {
		const currentSession = sessionSlice.reducer(
			initialState,
			sessionIn(loggedser)
		);

		expect(currentSession).toEqual(loggedser);
	});

	it('should session out', () => {
		let currentSession = sessionSlice.reducer(
			initialState,
			sessionIn(loggedser)
		);

		currentSession = sessionSlice.reducer(initialState, sessionOut());

		expect(currentSession).toEqual(initialState);
	});

	it('should set the selected task', () => {
		let currentTaskSelected = sessionSlice.reducer(
			initialState,
			currentTask(selectedTask)
		);

		expect(currentTaskSelected.currentTask).toEqual(selectedTask);
	});

	it('should clear current task state', () => {
		let currentTaskSelected = sessionSlice.reducer(
			initialState,
			currentTask(selectedTask)
		);

		currentTaskSelected = sessionSlice.reducer(
			initialState,
			clearCurrentTask()
		);

		expect(currentTaskSelected).toEqual(initialState);
	});
});
