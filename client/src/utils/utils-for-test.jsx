import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { authSlice } from '../features/api/authSlice';
import { listSlice } from '../features/api/listSlice';
import { sessionSlice } from '../features/api/sessionSlice';
import { taskSlice } from '../features/api/taskSlice';
// As a basic setup, import your same slice reducers

export function renderWithProviders(
	ui,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = configureStore({
			reducer: {
				authSlice: authSlice.reducer,
				listSlice: listSlice.reducer,
				taskSlice: taskSlice.reducer,
				session: sessionSlice.reducer,
			},
			preloadedState,
		}),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>;
	}

	// Return an object with the store and all of RTL's query functions
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
