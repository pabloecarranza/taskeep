import { fireEvent, render, screen } from '@testing-library/react';
import { vi, expect, describe, it } from 'vitest';
import { ModalWelcome } from './../../src/components/Modals/ModalWelcome';

describe('Test suite on ModalWelcome component', () => {
	const ModalWelcomeDates = {
		greeting: 'Hi',
		welcome_text_1: 'Welcome to my personal app for task management.',
		welcome_text_2:
			'The main functionalities are to create tasks and group them by lists, set the priority and expiration date. I hope you enjoy it !',
		name: 'Pablo',
	};

	it('must show the gretting text', () => {
		const { container } = render(<ModalWelcome {...ModalWelcomeDates} />);
		expect(container).toMatchSnapshot();
	});
});
