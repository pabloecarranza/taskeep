import { screen, fireEvent, render } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { DrawerBodyTask } from './../../../../src/components/DrawerTask/DrawerBodyTask';
import { DrawerBodyTaskDates } from './../../../../src/utils/EnglishTexts';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
import { Drawer, DrawerContent } from '@chakra-ui/react';
describe('Name of the group', () => {
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

	it('should ', () => {
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
		screen.debug();
	});
});

/*
debe mostrar los datos de la tarea seleccionada
debe llamar handleOnChange al hacer click en la descripcion
debe llamar handleOnChange al hacer click en important
debe llamar handleOnChange al hacer click en completado
debe mostrar los nombres de las listas de tareas y llamar handleOnChange al hacer click en una
debe llamar handleOnChange al hacer click en datepicker
debe llamar handleOnChange al hacer click en notes
*/
