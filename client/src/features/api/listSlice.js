import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const listSlice = createApi({
	reducerPath: 'listSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4000',
	}),
	tagTypes: ['List'],
	endpoints: builder => ({
		getLists: builder.query({
			query: () => '/lists',
			providesTags: ['Get'],
		}),
		/* postList: builder.mutation({
			query: payload => ({
				url: '/list',
				method: 'POST',
				body: payload,
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}),
			invalidatesTags: ['List'],
		}), */
	}),
});
export const { useGetListsQuery } = listSlice;
