import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { AddTask } from '../../../../src/components/AddTask/AddTask';
import { AddTaskDates } from './../../../../src/utils/EnglishTexts';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
import { useAddTask } from './../../../../src/Hooks/useAddTask';

vi.mock('../../../../src/Hooks/useAddTask');

describe('Test suite on AddTask component', () => {
	//en esta prueba logre mockear un customHook

	it('debe mostrar el texto del boton y el text de placeholder del input enviado por props ', () => {
		const capitalizeFirstLetter = vi.fn();
		const handleOnChange = vi.fn();
		const handleSubmit = vi.fn();
		useAddTask = vi.fn().mockReturnValue({
			PostTaskResponse: {},
			capitalizeFirstLetter,
			handleOnChange,
			handleSubmit,
			data: [],
			task: {},
			isLoading: false,
		});
		renderWithProviders(<AddTask {...AddTaskDates} />);

		const buttonAdd = screen.getByText(AddTaskDates.button_text);
		const inputTask = screen.getByPlaceholderText(
			AddTaskDates.placeholder_text
		);

		expect(inputTask).toBeTruthy();
		expect(buttonAdd.textContent).toEqual(AddTaskDates.button_text);
	});
});

/*

debe mostrar el spinner cuando se esta cargando la respuesta del posteo de la tarea

debe ocultar el icono de la tarea cuando se esta cargando la respuesta del posteo de la tarea

al cambiar el valor del input debe llamar a la funcion handleOnChange

al hacer click en Add debe llamar a handleSubmit
*/
