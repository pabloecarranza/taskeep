import { render, renderHook, screen } from '@testing-library/react';
import { vi, expect, describe, it, test, beforeEach } from 'vitest';
import { Lists } from '../../../src/components/Sidebar/Lists';
import { BrowserRouter as Router } from 'react-router-dom';
import * as useDeleteList from '../../../src/Hooks/useDeleteList';

describe('Test suite on Lists component', () => {
	const data = [
		{
			createdAt: '2022-11-04T05:15:45.627Z',
			id: 12,
			name: 'Nueva lista',
			updatedAt: '2022-11-04T05:15:45.627Z',
		},
	];

	vi.mock('../../src/components/Modals/ModalConfirm.jsx', () => {
		return {
			__esModule: true,
			default: () => {
				return <div />;
			},
			ModalConfirm: () => {
				return <div />;
			},
		};
	});
	vi.mock(useDeleteList);

	it('must match with the snapshot  ', () => {
		const { container } = render(
			<Router>
				<Lists data={data} />
			</Router>
		);

		expect(container).toMatchSnapshot();
	});

	it('should render name of list', async () => {
		/*		useDeleteList
			.mockReturnValue({
				message: 'List eliminated successfully',
			})
			.mockRejectedValue(new Error('TEST_ERROR'))*/
		render(
			<Router>
				<Lists data={data} />
			</Router>
		);

		const text = screen.getByRole('link');
		expect(text).toHaveTextContent(data[0].name);
	});
});
