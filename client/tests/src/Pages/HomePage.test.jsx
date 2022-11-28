import { render, screen } from '@testing-library/react';
import { vi, expect, describe, it, test } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from './../../../src/Pages/HomePage';
import { renderWithProviders } from './../../../src/utils/utils-for-test';

describe('Test suite on HomePage component', () => {
	vi.mock('../../../src/components/Sidebar/Sidebar', () => {
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

	vi.mock('../../../src/components/Routes/MainArea.jsx', () => {
		return {
			__esModule: true,
			default: () => {
				return <MainArea />;
			},
			MainArea: () => {
				return <div />;
			},
		};
	});

	it('should ', () => {
		const { container } = renderWithProviders(
			<Router>
				<HomePage />
			</Router>
		);

		expect(container).toMatchSnapshot();
	});
});
