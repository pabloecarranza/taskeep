import { screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { DrawerBodyTask } from './../../../../src/components/DrawerTask/DrawerBodyTask';
import { DrawerBodyTaskDates } from './../../../../src/utils/EnglishTexts';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
import { Drawer, DrawerContent } from '@chakra-ui/react';
describe('test suite on DrawerBodyTask', () => {
	const capitalizeFirstLetter = vi.fn();
	const handleOnChange = vi.fn();
	const task = {
		completed: false,
		createdAt: '2022-11-30T05:28:35.432Z',
		description: 'nueva tarea',
		expiration_date: '2022-11-22',
		id: 142,
		important: true,
		listid: 136,
		notes: 'stickyNote',
		reminder: 'YYYY-MM-DD',
		repeat: 'YYYY-MM-DD',
		updatedAt: '2022-11-30T05:28:35.432Z',
		userid: 'cc611eed-f679-45e0-b0ff-795e0ccbdbf1',
	};
	const data = [
		{
			createdAt: '2022-11-30T05:28:16.171Z',
			id: 136,
			name: 'nueva lista',
			updatedAt: '2022-11-30T05:28:16.171Z',
		},
	];

	const isOpen = true;
	const onClosed = vi.fn();
	const firstField = vi.fn();

	it('debe mostrar la descripcion de la tarea seleccionada y llamar a handleOnChange si cambia', () => {
		const { getByDisplayValue } = renderWithProviders(
			<Drawer
				isOpen={isOpen}
				placement='right'
				initialFocusRef={firstField}
				onClose={onClosed}
			>
				<DrawerContent
					bg='gray.700'
					color='white'
					borderRadius='10px'
					boxShadow='dark-lg'
				>
					<DrawerBodyTask
						handleOnChange={handleOnChange}
						capitalizeFirstLetter={capitalizeFirstLetter}
						task={task}
						data={data}
						{...DrawerBodyTaskDates}
					/>
				</DrawerContent>
			</Drawer>
		);

		const description = getByDisplayValue(task.description);
		expect(description.textContent).toEqual(task.description);

		fireEvent.change(description, { target: { value: '12' } });
		expect(handleOnChange).toHaveBeenCalled();
	});

	it('debe llamar handleOnChange al hacer click en important ', () => {
		const { getByText } = renderWithProviders(
			<Drawer
				isOpen={isOpen}
				placement='right'
				initialFocusRef={firstField}
				onClose={onClosed}
			>
				<DrawerContent
					bg='gray.700'
					color='white'
					borderRadius='10px'
					boxShadow='dark-lg'
				>
					<DrawerBodyTask
						handleOnChange={handleOnChange}
						capitalizeFirstLetter={capitalizeFirstLetter}
						task={task}
						data={data}
						{...DrawerBodyTaskDates}
					/>
				</DrawerContent>
			</Drawer>
		);

		const important = getByText(DrawerBodyTaskDates.textTwo);
		expect(important.textContent).toEqual(DrawerBodyTaskDates.textTwo);

		fireEvent.click(important);
		expect(handleOnChange).toHaveBeenCalledTimes(2);
	});

	it('debe llamar handleOnChange al hacer click en completado', () => {
		renderWithProviders(
			<Drawer
				isOpen={isOpen}
				placement='right'
				initialFocusRef={firstField}
				onClose={onClosed}
			>
				<DrawerContent
					bg='gray.700'
					color='white'
					borderRadius='10px'
					boxShadow='dark-lg'
				>
					<DrawerBodyTask
						handleOnChange={handleOnChange}
						capitalizeFirstLetter={capitalizeFirstLetter}
						task={task}
						data={data}
						{...DrawerBodyTaskDates}
					/>
				</DrawerContent>
			</Drawer>
		);

		const completed = screen.getByText(DrawerBodyTaskDates.textThree);

		fireEvent.click(completed);
		expect(handleOnChange).toHaveBeenCalled();
	});

	it('debe llamar handleOnChange al hacer click en notes', () => {
		const { getByDisplayValue } = renderWithProviders(
			<Drawer
				isOpen={isOpen}
				placement='right'
				initialFocusRef={firstField}
				onClose={onClosed}
			>
				<DrawerContent
					bg='gray.700'
					color='white'
					borderRadius='10px'
					boxShadow='dark-lg'
				>
					<DrawerBodyTask
						handleOnChange={handleOnChange}
						capitalizeFirstLetter={capitalizeFirstLetter}
						task={task}
						data={data}
						{...DrawerBodyTaskDates}
					/>
				</DrawerContent>
			</Drawer>
		);

		const description = getByDisplayValue(task.notes);
		expect(description.textContent).toEqual(task.notes);
		fireEvent.click(description);
		expect(handleOnChange).toHaveBeenCalled();
	});
	it('debe llamar handleOnChange al hacer click en datepicker', () => {
		renderWithProviders(
			<Drawer
				isOpen={isOpen}
				placement='right'
				initialFocusRef={firstField}
				onClose={onClosed}
			>
				<DrawerContent
					bg='gray.700'
					color='white'
					borderRadius='10px'
					boxShadow='dark-lg'
				>
					<DrawerBodyTask
						handleOnChange={handleOnChange}
						capitalizeFirstLetter={capitalizeFirstLetter}
						task={task}
						data={data}
						{...DrawerBodyTaskDates}
					/>
				</DrawerContent>
			</Drawer>
		);

		const datePicker = screen.getByDisplayValue(task.expiration_date);
		fireEvent.change(datePicker, { target: { value: '2019-11-22' } });
		expect(handleOnChange).toHaveBeenCalled();
	});

	it('debe mostrar los nombres de las listas de tareas y llamar handleOnChange al hacer click en una', () => {
		renderWithProviders(
			<Drawer
				isOpen={isOpen}
				placement='right'
				initialFocusRef={firstField}
				onClose={onClosed}
			>
				<DrawerContent
					bg='gray.700'
					color='white'
					borderRadius='10px'
					boxShadow='dark-lg'
				>
					<DrawerBodyTask
						handleOnChange={handleOnChange}
						capitalizeFirstLetter={capitalizeFirstLetter}
						task={task}
						data={data}
						{...DrawerBodyTaskDates}
					/>
				</DrawerContent>
			</Drawer>
		);

		const taskList = screen.getByTestId(data[0].name);

		fireEvent.click(taskList);
		expect(handleOnChange).toHaveBeenCalled();
	});
});
