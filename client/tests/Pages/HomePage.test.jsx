import { render, screen } from '@testing-library/react';
import { vi, expect, describe, it, test } from 'vitest';
import { HomePage } from './../../src/Pages/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Name of the group', () => {
	vi.mock('../../src/components/Sidebar/Sidebar', () => {
		return {
			__esModule: true,
			default: () => {
				return <Sidebar />;
			},
			Sidebar: () => {
				return <div />;
			},
		};
	});

	vi.mock('../../src/components/TaskArea.jsx', () => {
		return {
			__esModule: true,
			default: () => {
				return <TaskArea />;
			},
			TaskArea: () => {
				return <div />;
			},
		};
	});

	it('should match with snapshot', () => {
		const { container } = render(
			<Router>
				<HomePage />
			</Router>
		);

		expect(container).toMatchSnapshot();
	});
});
