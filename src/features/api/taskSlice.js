import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskSlice = createApi({
	reducerPath: 'taskSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
	}),
	tagTypes: ['Task'],
	endpoints: builder => ({
		PostTask: builder.mutation({
			query: payload => ({
				url: `/task/${payload.userid}`,
				method: 'POST',
				body: payload,
				credentials: 'include',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
				},
			}),
			invalidatesTags: ['Task'],
		}),
		GetTasks: builder.query({
			query: () => '/tasks',
			providesTags: ['Task'],
		}),
		DeleteTask: builder.mutation({
			query: payload => ({
				url: `/task/${payload}`,
				method: 'Delete',
				credentials: 'include',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
				},
			}),
			invalidatesTags: ['Task'],
		}),
		GetTask: builder.mutation({
			query: payload => ({
				url: `/task/${payload.id}`,
				method: 'GET',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
				},
			}),
			invalidatesTags: ['Task'],
		}),
		PutTask: builder.mutation({
			query: payload => ({
				url: `/task/${payload.id}`,
				method: 'PUT',
				body: payload,
				credentials: 'include',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
				},
			}),
			invalidatesTags: ['Task'],
		}),
		HotPutTask: builder.mutation({
			query: payload => ({
				url: `/task/${payload}`,
				method: 'PUT',
				credentials: 'include',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
				},
			}),
			invalidatesTags: ['Task'],
		}),
	}),
});
export const {
	usePostTaskMutation,
	useGetTasksQuery,
	useGetTaskMutation,
	useDeleteTaskMutation,
	usePutTaskMutation,
	useHotPutTaskMutation,
} = taskSlice;
