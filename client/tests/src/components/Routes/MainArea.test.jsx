import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { MainArea } from '../../../../src/components/Routes/MainArea';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotFoundPage } from './../../../../src/Pages/NotFoundPage';
import { NotFoundPageDates } from './../../../../src/utils/EnglishTexts';

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

		const selectBackground1 = screen.getByDisplayValue('BG1');
		fireEvent.click(selectBackground1);
		expect(selectBackground1).toBeChecked();

		const selectBackground2 = screen.getByDisplayValue('BG2');
		fireEvent.click(selectBackground2);
		expect(selectBackground2).toBeChecked();

		const selectBackground3 = screen.getByDisplayValue('BG3');
		fireEvent.click(selectBackground3);
		expect(selectBackground3).toBeChecked();

		const selectBackground4 = screen.getByDisplayValue('BG4');
		fireEvent.click(selectBackground4);
		expect(selectBackground4).toBeChecked();

		const selectBackground5 = screen.getByDisplayValue('BG5');
		fireEvent.click(selectBackground5);
		expect(selectBackground5).toBeChecked();

		const selectBackground6 = screen.getByDisplayValue('BG6');
		fireEvent.click(selectBackground6);
		expect(selectBackground6).toBeChecked();

		const selectBackground7 = screen.getByDisplayValue('BG7');
		fireEvent.click(selectBackground7);
		expect(selectBackground7).toBeChecked();
	});
});
