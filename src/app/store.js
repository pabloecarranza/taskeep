import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authSlice } from '../features/api/authSlice';
import { listSlice } from './../features/api/listSlice';
import { sessionSlice } from './../features/api/sessionSlice';
import { taskSlice } from './../features/api/taskSlice';

export const store = configureStore({
	reducer: {
		[authSlice.reducerPath]: authSlice.reducer,
		[listSlice.reducerPath]: listSlice.reducer,
		[taskSlice.reducerPath]: taskSlice.reducer,
		session: sessionSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			authSlice.middleware,
			listSlice.middleware,
			taskSlice.middleware
		),
});
setupListeners(store.dispatch);
