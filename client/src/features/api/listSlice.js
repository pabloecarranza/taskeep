import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const listSlice = createApi({
	reducerPath: 'listSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://taskeep-api.herokuapp.com',
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
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}),
			invalidatesTags: ['List'],
		}),
		PutList: builder.mutation({
			query: payload => ({
				method: 'Put',
				url: `/list/${payload.id}`,
				body: payload,
				credentials: 'include',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}),
			invalidatesTags: ['List'],
		}),
	}),
});
export const {
	useGetListsQuery,
	usePostListMutation,
	useDeleteListMutation,
	usePutListMutation,
} = listSlice;
