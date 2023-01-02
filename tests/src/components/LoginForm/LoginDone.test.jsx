import { screen, fireEvent, render } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { LoginDone } from './../../../../src/components/LoginForm/LoginDone';
import { SignInSuccessfullyDates } from './../../../../src/utils/EnglishTexts';

describe('Name of the group', () => {
	const navigate = vi.fn();

	it('debe contener el texto correcto en el titulo ', () => {
		render(<LoginDone {...SignInSuccessfullyDates} navigate={navigate} />);

		const title = screen.getByText(SignInSuccessfullyDates.title);

		expect(title.textContent).toEqual(SignInSuccessfullyDates.title);
	});
	it('debe contener el texto correcto en la descripcion ', () => {
		render(<LoginDone {...SignInSuccessfullyDates} navigate={navigate} />);

		const description = screen.getByText(SignInSuccessfullyDates.description);

		expect(description.textContent).toEqual(
			SignInSuccessfullyDates.description
		);
	});

	it('debe llamar a navigate al hacer click en el boton de entrar ', () => {
		render(<LoginDone {...SignInSuccessfullyDates} navigate={navigate} />);

		const buttonNavigate = screen.getByText(SignInSuccessfullyDates.button);

		fireEvent.click(buttonNavigate);

		expect(navigate).toHaveBeenCalled();
		expect(buttonNavigate.textContent).toEqual(SignInSuccessfullyDates.button);
	});
});
