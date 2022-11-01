import {
	fireEvent,
	render,
	screen,
	renderHook,
	act,
} from '@testing-library/react';
import { vi, expect, describe, it, beforeAll } from 'vitest';
import { ModalWelcome } from './../../src/components/Modals/ModalWelcome';
import { container } from '@testing-library/jest-dom';

describe('Test suite on ModalWelcome component', () => {
	const ModalWelcomeDates = {
		greeting: 'Hi',
		welcome_text_1: 'personal',
		welcome_text_2: 'functionalities',
		name: 'Pablo',
	};

	const isOpen = true;

	it('must show the gretting text', () => {
		const component = render(
			<ModalWelcome
				{...ModalWelcomeDates}
				onClose={() => {}}
				isOpen={isOpen}
				setIsloaded={() => {}}
			/>
		);

		screen.debug();
		//expect(screen.getByText('functionalities'));
	});
});
