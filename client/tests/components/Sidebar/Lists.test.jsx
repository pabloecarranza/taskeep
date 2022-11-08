import { render, renderHook, screen } from '@testing-library/react';
import { vi, expect, describe, it, test, beforeEach } from 'vitest';
import { Lists } from '../../../src/components/Sidebar/Lists';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import { store } from './../../../src/app/store';

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
				return <ModalConfirm />;
			},
			ModalConfirm: () => {
				return <div />;
			},
		};
	});

	it('must match with the snapshot  ', () => {
		const { container } = render(
			<Provider store={store}>
				<Router>
					<Lists data={data} />
				</Router>
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	it('must display data list from props', () => {
		render(
			<Provider store={store}>
				<Router>
					<Lists data={data} />
				</Router>
			</Provider>
		);
		screen.debug();

		const button = screen.getByText(data[0].name);
		expect(button).toHaveTextContent(data[0].name);
	});
});
