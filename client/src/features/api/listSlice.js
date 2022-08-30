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
			providesTags: ['List'],
		}),
		PostList: builder.mutation({
			query: payload => ({
				url: '/list',
				method: 'Post',
				body: payload,
				credentials: 'include',
				/* headers: {
					'Content-type': 'application/json; charset=UTF-8',
				}, */
			}),
			invalidatesTags: ['List'],
		}),
		DeleteList: builder.mutation({
			query: payload => ({
				url: `/list/${payload}`,
				method: 'Delete',
				credentials: 'include',
				/* headers: {
					'Content-type': 'application/json; charset=UTF-8',
				}, */
			}),
			invalidatesTags: ['List'],
		}),
	}),
});
export const { useGetListsQuery, usePostListMutation, useDeleteListMutation } =
	listSlice;
