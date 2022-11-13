import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { AddTask } from '../../../../src/components/AddTask/AddTask';
import { AddTaskDates } from './../../../../src/utils/EnglishTexts';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
import { useAddTask } from './../../../../src/Hooks/useAddTask';

vi.mock('../../../../src/Hooks/useAddTask');

describe('Name of the group', () => {
	it('should ', () => {
		const capitalizeFirstLetter = vi.fn();
		const handleOnChange = vi.fn();
		const handleSubmit = vi.fn();
		useAddTask = vi.fn().mockReturnValue({
			PostTaskResponse: {
				isError: false,
				isLoading: false,
				isSuccess: false,
				isUninitialized: true,
				originalArgs: undefined,
				reset: vi.fn(),
				status: 'uninitialized',
			},
			capitalizeFirstLetter,
			handleOnChange,
			handleSubmit,
			data: [
				{
					createdAt: '2022-11-13T03:41:25.984Z',
					id: 110,
					name: 'a',
					updatedAt: '2022-11-13T03:41:25.984Z',
				},
			],
			task: {
				completed: false,
				description: '',
				expiration_date: '',
				important: false,
				listid: null,
				notes: '',
				reminder: 'YYYY-MM-DD',
				repeat: 'YYYY-MM-DD',
				userid: 'cc611eed-f679-45e0-b0ff-795e0ccbdbf1',
			},
			isLoading: false,
		});
		renderWithProviders(<AddTask {...AddTaskDates} />);
	});
});

/*
const userData = {
email: "pabloecarranza@gmail.com",
id: "cc611eed-f679-45e0-b0ff-795e0ccbdbf1",
message: "Login successfully",
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNjNjExZWVkLWY2NzktNDVlMC1iMGZmLTc5NWUwY2NiZGJmMSIsImlhdCI6MTY2ODMxMDAxNiwiZXhwIjoxNjY4Mzk2NDE2fQ.Op97JOUgK6yzmFB6pwjXk5qcR3yN5DWJOAMWbnqeVX0",
username: "a"
}
*/
