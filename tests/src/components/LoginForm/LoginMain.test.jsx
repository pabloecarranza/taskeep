import { screen, fireEvent, render } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { SignInFormDates } from '../../../../src/utils/EnglishTexts';
import { LoginMain } from './../../../../src/components/LoginForm/LoginMain';
import { useLoginUser } from './../../../../src/Hooks/useLoginUser';
import {
	SignUpFormDates,
	SignInSuccessfullyDates,
	SignUpSuccessfullyDates,
} from './../../../../src/utils/EnglishTexts';

vi.mock('../../../../src/Hooks/useLoginUser');

describe('Name of the group', () => {
	afterEach(() => {
		vi.clearAllMocks();
		vi.resetAllMocks();
	});

	const signUp = false;
	const SignInResponse = { isSuccess: false };
	const SignUpResponse = { isSuccess: false };
	const navigate = vi.fn();
	const handleClick = vi.fn();
	const handleClickType = vi.fn();
	const handleChange = vi.fn();
	const handleInvited = vi.fn();
	const handleSubmit = vi.fn();
	const credentials = {
		username: 'prueba',
		password: '132321',
	};
	const show = true;

	it('debe llamar a la funcion para mostrar el formulario de alta de usuario ', () => {
		// eslint-disable-next-line no-import-assign
		useLoginUser = vi.fn().mockReturnValue({
			signUp,
			SignInResponse,
			SignUpResponse,
			navigate,
			handleClick,
			handleClickType,
			handleChange,
			handleInvited,
			handleSubmit,
			credentials,
			show,
		});

		render(<LoginMain />);

		const signUpButton = screen.getByText(SignInFormDates.button);

		fireEvent.click(signUpButton);

		expect(signUpButton.textContent).toEqual(SignInFormDates.button);
		expect(handleClickType).toHaveBeenCalled();
	});

	it('debe llamar a la funcion para mostrar el formulario de inicio de sesion ', () => {
		// eslint-disable-next-line no-import-assign
		useLoginUser = vi.fn().mockReturnValue({
			signUp: true,
			SignInResponse,
			SignUpResponse,
			navigate,
			handleClick,
			handleClickType,
			handleChange,
			handleInvited,
			handleSubmit,
			credentials,
			show,
		});

		render(<LoginMain />);

		const signInButton = screen.getByText(SignUpFormDates.button);

		fireEvent.click(signInButton);

		expect(signInButton.textContent).toEqual(SignUpFormDates.button);
		expect(handleClickType).toHaveBeenCalled();
	});

	it('debe mostrar el mensaje de bienvenida al loguearse ', () => {
		// eslint-disable-next-line no-import-assign
		useLoginUser = vi.fn().mockReturnValue({
			signUp,
			SignInResponse: { isSuccess: true },
			SignUpResponse,
			navigate,
			handleClick,
			handleClickType,
			handleChange,
			handleInvited,
			handleSubmit,
			credentials,
			show,
		});

		render(<LoginMain />);

		const signInOK = screen.getByText(SignInSuccessfullyDates.title);
		const buttonEnter = screen.getByText(SignInSuccessfullyDates.button);

		fireEvent.click(buttonEnter);

		expect(navigate).toHaveBeenCalled();
		expect(signInOK.textContent).toEqual(SignInSuccessfullyDates.title);
	});

	it('debe mostrar el mensaje de bienvenida al registrarse ', () => {
		// eslint-disable-next-line no-import-assign
		useLoginUser = vi.fn().mockReturnValue({
			signUp,
			SignInResponse,
			SignUpResponse: { isSuccess: true },
			navigate,
			handleClick,
			handleClickType,
			handleChange,
			handleInvited,
			handleSubmit,
			credentials,
			show,
		});

		render(<LoginMain />);

		const signUpOK = screen.getByText(SignUpSuccessfullyDates.title);
		const buttonEnter = screen.getByText(SignInSuccessfullyDates.button);

		fireEvent.click(buttonEnter);

		expect(signUpOK.textContent).toEqual(SignUpSuccessfullyDates.title);
		expect(navigate).toHaveBeenCalled();
	});
});
