import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
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

	it('must show the alt text on image render', () => {
		render(
			<ModalWelcome
				{...ModalWelcomeDates}
				onClose={() => {}}
				isOpen={isOpen}
				setIsloaded={() => {}}
			/>
		);
		expect(screen.getByRole('img').alt).toBe(ModalWelcomeDates.alt);
	});

	it('should display name on component', () => {
		render(
			<ModalWelcome
				{...ModalWelcomeDates}
				onClose={() => {}}
				isOpen={isOpen}
				setIsloaded={() => {}}
			/>
		);

		const text = screen.getByRole('dialog');
		expect(text).toHaveTextContent(ModalWelcomeDates.name);
	});

	it('should display gretting on component', () => {
		render(
			<ModalWelcome
				{...ModalWelcomeDates}
				onClose={() => {}}
				isOpen={isOpen}
				setIsloaded={() => {}}
			/>
		);

		const text = screen.getByRole('dialog');
		expect(text).toHaveTextContent(ModalWelcomeDates.greeting);
	});

	it('should display welcome text one on component', () => {
		render(
			<ModalWelcome
				{...ModalWelcomeDates}
				onClose={() => {}}
				isOpen={isOpen}
				setIsloaded={() => {}}
			/>
		);

		const text = screen.getByRole('dialog');
		expect(text).toHaveTextContent(ModalWelcomeDates.welcome_text_1);
	});

	it('should display welcome text two on component', () => {
		render(
			<ModalWelcome
				{...ModalWelcomeDates}
				onClose={() => {}}
				isOpen={isOpen}
				setIsloaded={() => {}}
			/>
		);

		const text = screen.getByRole('dialog');
		expect(text).toHaveTextContent(ModalWelcomeDates.welcome_text_2);
	});

	it('should display close text on button', () => {
		render(
			<ModalWelcome
				{...ModalWelcomeDates}
				onClose={() => {}}
				isOpen={isOpen}
				setIsloaded={() => {}}
			/>
		);

		const text = screen.getByRole('dialog');
		expect(text).toHaveTextContent(ModalWelcomeDates.button_text);
	});

	it('should display close button', () => {
		render(
			<ModalWelcome
				{...ModalWelcomeDates}
				onClose={() => {}}
				isOpen={isOpen}
				setIsloaded={() => {}}
			/>
		);

		const button = screen.getByText(ModalWelcomeDates.button_text);
		expect(button.textContent).toEqual(ModalWelcomeDates.button_text);
	});
});
