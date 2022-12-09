import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { MainArea } from '../../../../src/components/Routes/MainArea';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotFoundPage } from './../../../../src/Pages/NotFoundPage';

describe('first', () => {
	vi.mock('../../../../src/Pages/NotFoundPage', () => {
		return {
			__esModule: true,
			default: () => {
				return <NotFoundPage />;
			},
			NotFoundPage: () => {
				return <div />;
			},
		};
	});

	it('should ', () => {
		render(
			<Router>
				<MainArea />
			</Router>
		);

		const selectBackground1 = screen.getByDisplayValue('/src/assets/BG1.jpg');
		fireEvent.click(selectBackground1);
		expect(selectBackground1).toBeChecked();

		const selectBackground2 = screen.getByDisplayValue('/src/assets/BG2.jpg');
		fireEvent.click(selectBackground2);
		expect(selectBackground2).toBeChecked();

		const selectBackground3 = screen.getByDisplayValue('/src/assets/BG3.jpg');
		fireEvent.click(selectBackground3);
		expect(selectBackground3).toBeChecked();

		const selectBackground4 = screen.getByDisplayValue('/src/assets/BG4.jpg');
		fireEvent.click(selectBackground4);
		expect(selectBackground4).toBeChecked();

		const selectBackground5 = screen.getByDisplayValue('/src/assets/BG5.jpg');
		fireEvent.click(selectBackground5);
		expect(selectBackground5).toBeChecked();

		const selectBackground6 = screen.getByDisplayValue('/src/assets/BG6.jpg');
		fireEvent.click(selectBackground6);
		expect(selectBackground6).toBeChecked();

		const selectBackground7 = screen.getByDisplayValue('/src/assets/BG7.jpg');
		fireEvent.click(selectBackground7);
		expect(selectBackground7).toBeChecked();
	});
});
