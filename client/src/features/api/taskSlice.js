import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskSlice = createApi({
	reducerPath: 'taskSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4000',
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
				},
			}),
			invalidatesTags: ['Task'],
		}),
		GetTask: builder.mutation({
			query: payload => ({
				url: `/task/${payload.id}`,
				method: 'GET',
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
