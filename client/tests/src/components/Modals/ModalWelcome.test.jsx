import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { renderWithProviders } from '../../../../src/utils/utils-for-test';
import { ModalWelcome } from './../../../../src/components/Modals/ModalWelcome';

describe('Test suite on ModalWelcome component', () => {
	const ModalWelcomeDates = {
		greeting: 'Hi',
		welcomeTextOne: 'personal',
		welcomeTextTwo: 'functionalities',
		name: 'Pablo',
		alt: 'PabloCarranza',
		buttonText: 'Close',
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
		const button = screen.getByText(ModalWelcomeDates.buttonText);
		expect(screen.getByRole('img').alt).toBe(ModalWelcomeDates.alt);
		expect(button.textContent).toEqual(ModalWelcomeDates.buttonText);
		expect(text).toHaveTextContent(ModalWelcomeDates.name);
		expect(text).toHaveTextContent(ModalWelcomeDates.greeting);
		expect(text).toHaveTextContent(ModalWelcomeDates.welcomeTextOne);
		expect(text).toHaveTextContent(ModalWelcomeDates.welcomeTextTwo);
		expect(text).toHaveTextContent(ModalWelcomeDates.buttonText);
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
		const button = screen.getByText(ModalWelcomeDates.buttonText);
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
		const button = screen.getByText(ModalWelcomeDates.buttonText);
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalled();
	});
});
