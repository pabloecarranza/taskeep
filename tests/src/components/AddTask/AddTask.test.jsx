import { screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { AddTask } from '../../../../src/components/AddTask/AddTask';
import { AddTaskDates } from './../../../../src/utils/EnglishTexts';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
// eslint-disable-next-line no-unused-vars
import { useAddTask } from './../../../../src/Hooks/useAddTask';

vi.mock('../../../../src/Hooks/useAddTask');

describe('Test suite on AddTask component', () => {
	const capitalizeFirstLetter = vi.fn();
	const handleOnChange = vi.fn();
	const handleSubmit = vi.fn();

	it('debe mostrar el texto del boton y el texto del placeholder del input enviado por props ', () => {
		// eslint-disable-next-line no-import-assign
		useAddTask = vi.fn().mockReturnValue({
			PostTaskResponse: {},
			capitalizeFirstLetter,
			handleOnChange,
			handleSubmit,
			data: [],
			task: {},
			isLoading: true,
		});
		renderWithProviders(<AddTask {...AddTaskDates} />);

		const buttonAdd = screen.getByText(AddTaskDates.buttonText);
		const inputTask = screen.getByPlaceholderText(AddTaskDates.placeholderText);

		expect(inputTask).toBeTruthy();
		expect(buttonAdd.textContent).toEqual(AddTaskDates.buttonText);
	});

	it('debe mostrar el spinner cuando se esta cargando la respuesta del posteo de la tarea ', () => {
		// eslint-disable-next-line no-import-assign
		useAddTask = vi.fn().mockReturnValue({
			PostTaskResponse: {
				isLoading: true,
			},
			capitalizeFirstLetter,
			handleOnChange,
			handleSubmit,
			data: [],
			task: {},
			isLoading: true,
		});
		renderWithProviders(<AddTask {...AddTaskDates} />);

		const spinner = screen.getByLabelText('spinner');
		expect(spinner).toBeTruthy();
	});

	it('debe mostrar el icono de la tarea cuando no se esta cargando la respuesta de un posteo de tarea', () => {
		// eslint-disable-next-line no-import-assign
		useAddTask = vi.fn().mockReturnValue({
			PostTaskResponse: {
				isLoading: false,
			},
			capitalizeFirstLetter,
			handleOnChange,
			handleSubmit,
			data: [],
			task: {},
			isLoading: false,
		});
		renderWithProviders(<AddTask {...AddTaskDates} />);

		const taskIcon = screen.getByLabelText('icontask');
		expect(taskIcon).toBeInTheDocument();
	});
	it('al cambiar el valor del input debe llamar a la funcion handleOnChange ', () => {
		renderWithProviders(<AddTask {...AddTaskDates} />);

		const inputTask = screen.getByRole('textbox');
		fireEvent.change(inputTask, { target: { value: 'newtask' } });

		expect(inputTask.value).toBe('newtask');
	});

	it('al hacer click en Add debe llamar a handleSubmit ', () => {
		renderWithProviders(<AddTask {...AddTaskDates} />);

		const submitButton = screen.getByText('Add');
		fireEvent.click(submitButton);
		expect(handleSubmit).toHaveBeenCalled();
	});
});
