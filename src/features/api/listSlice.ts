import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const listSlice = createApi({
	reducerPath: 'listSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
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
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
				},
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
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
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
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
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
