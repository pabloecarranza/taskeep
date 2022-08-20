import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authSlice } from '../features/api/authSlice';
import { listSlice } from './../features/api/listSlice';

export const store = configureStore({
	reducer: {
		[authSlice.reducerPath]: authSlice.reducer,
		[listSlice.reducerPath]: listSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(authSlice.middleware),
});
setupListeners(store.dispatch);
