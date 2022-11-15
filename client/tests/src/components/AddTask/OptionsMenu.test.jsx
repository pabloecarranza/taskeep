import { screen, fireEvent, render } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { OptionsMenu } from '../../../../src/components/AddTask/OptionsMenu';

describe('suite test on OptionsMenu component', () => {
	const handleOnChange = vi.fn();

	const datesOptions = {
		task: {},
		data: [],
		isLoading: true,
		capitalizeFirstLetter: vi.fn(),
		handleOnChange,
	};

	it('si esta cargando listas de tareas debe mostrar el spinner dentro del menuGroup ', () => {
		render(<OptionsMenu {...datesOptions} />);

		const spinner = screen.getByLabelText('spinnertasklist');
		expect(spinner).toBeTruthy();
	});
	it('al hacer click en el boton options debe mostrar las opciones disponibles ', () => {
		render(<OptionsMenu {...datesOptions} />);
		const buttonOptions = screen.getByRole('button');
		const onDisplayOptions = screen.getByLabelText('menulist');
		fireEvent.click(buttonOptions);

		expect(onDisplayOptions).toBeInTheDocument();
	});

	it('al habilitar el checkbox important debe llamar a handleOnChange  ', () => {
		render(<OptionsMenu {...datesOptions} />);
		const buttonOptions = screen.getByRole('button');
		const toggleImportant = screen.getByTestId('important');

		fireEvent.click(buttonOptions);
		fireEvent.click(toggleImportant);
		expect(handleOnChange).toHaveBeenCalledTimes(1);
	});

	it('al hacer click en datepicker debe llamar a handleOnChange ', () => {
		render(<OptionsMenu {...datesOptions} />);
		const datePicker = screen.getByTestId('date');
		screen.debug(datePicker);
	});
});

/*



si tiene lista de tareas debe mostrarlas dentro del menuGroup

al hacer click en una lista debe llamar a handleOnCHange
*/
