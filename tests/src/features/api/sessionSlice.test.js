import { expect, describe, it } from 'vitest';
import {
	clearCurrentTask,
	currentTask,
	sessionIn,
	sessionOut,
	sessionSlice,
} from '../../../../src/features/api/sessionSlice';

describe('Test suite on SessionSlice Reducer', () => {
	const initialState = {
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

	const loggedser = {
		message: 'Login successfully',
		id: '654',
		username: 'Invited',
		email: 'test@test.com',
		token: '654sdt24dssdtttt4654et234',
		logged: true,
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
		const currentTaskSelected = sessionSlice.reducer(
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
