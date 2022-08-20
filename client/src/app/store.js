import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authSlice } from '../features/api/authSlice';

export const store = configureStore({
	reducer: {
		[authSlice.reducerPath]: authSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(authSlice.middleware),
});
setupListeners(store.dispatch);
