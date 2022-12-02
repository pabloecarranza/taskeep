import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { renderWithProviders } from '../../../../src/utils/utils-for-test';
import { ModalWelcome } from './../../../../src/components/Modals/ModalWelcome';

describe('Test suite on ModalWelcome component', () => {
	const ModalWelcomeDates = {
		greeting: 'Hi',
		welcome_text_1: 'personal',
		welcome_text_2: 'functionalities',
		name: 'Pablo',
		alt: 'PabloCarranza',
		button_text: 'Close',
	};

	const isOpen = true;

	const handleClick = vi.fn();

	it('must show all texts send by props', () => {
		renderWithProviders(
			<ModalWelcome
				{...ModalWelcomeDates}
				onClose={() => {}}
				isOpen={isOpen}
				setIsloaded={() => {}}
			/>
		);
		const text = screen.getByRole('dialog');
		const button = screen.getByText(ModalWelcomeDates.button_text);
		expect(screen.getByRole('img').alt).toBe(ModalWelcomeDates.alt);
		expect(button.textContent).toEqual(ModalWelcomeDates.button_text);
		expect(text).toHaveTextContent(ModalWelcomeDates.name);
		expect(text).toHaveTextContent(ModalWelcomeDates.greeting);
		expect(text).toHaveTextContent(ModalWelcomeDates.welcome_text_1);
		expect(text).toHaveTextContent(ModalWelcomeDates.welcome_text_2);
		expect(text).toHaveTextContent(ModalWelcomeDates.button_text);
	});
	it('should call handleClick onClose Modal', () => {
		renderWithProviders(
			<ModalWelcome
				{...ModalWelcomeDates}
				onClose={handleClick}
				isOpen={isOpen}
				setIsloaded={() => {}}
			/>
		);
		const button = screen.getByText(ModalWelcomeDates.button_text);
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalled();
	});

	it('should call handleClick onClose Modal', () => {
		renderWithProviders(
			<ModalWelcome
				{...ModalWelcomeDates}
				onClose={handleClick}
				isOpen={isOpen}
				setIsloaded={() => {}}
			/>
		);
		const button = screen.getByText(ModalWelcomeDates.button_text);
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalled();
	});
});
