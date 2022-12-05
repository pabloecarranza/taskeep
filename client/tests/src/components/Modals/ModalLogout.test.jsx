import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { ModalLogoutDates } from '../../../../src/utils/EnglishTexts';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
import { ModalLogout } from './../../../../src/components/Modals/ModalLogout';
import { BrowserRouter as Router } from 'react-router-dom';

describe('test suite on modal logout', () => {
	const isOpen = true;
	const onClose = vi.fn();
	const onOpen = vi.fn();
	it('must show all texts send by props ', () => {
		renderWithProviders(
			<Router>
				<ModalLogout
					{...ModalLogoutDates}
					isOpen={isOpen}
					onClose={onClose}
					onOpen={onOpen}
				/>
			</Router>
		);
		const text = screen.getByRole('dialog');
		expect(text).toHaveTextContent(ModalLogoutDates.title);
		expect(text).toHaveTextContent(ModalLogoutDates.message);
		expect(text).toHaveTextContent(ModalLogoutDates.button_one);
		expect(text).toHaveTextContent(ModalLogoutDates.button_two);
	});
	it('should call onClose when click on cancel', () => {
		renderWithProviders(
			<Router>
				<ModalLogout
					{...ModalLogoutDates}
					isOpen={isOpen}
					onClose={onClose}
					onOpen={onOpen}
				/>
			</Router>
		);

		const cancelButton = screen.getByText(ModalLogoutDates.button_one);
		fireEvent.click(cancelButton);
		expect(onClose).toHaveBeenCalled();
	});
	it('should call onClose when click on cancel', () => {
		renderWithProviders(
			<Router>
				<ModalLogout
					{...ModalLogoutDates}
					isOpen={isOpen}
					onClose={onClose}
					onOpen={onOpen}
				/>
			</Router>
		);

		const logoutButton = screen.getByText(ModalLogoutDates.button_two);
		fireEvent.click(logoutButton);
		expect(onClose).toHaveBeenCalled();
	});
});
