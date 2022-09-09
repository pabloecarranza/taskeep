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
	}),
});
export const { usePostTaskMutation, useGetTasksQuery } = taskSlice;
