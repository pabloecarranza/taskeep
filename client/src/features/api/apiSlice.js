import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
	reducerPath: 'apiSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4000',
	}),
	tagTypes: ['Auth'],
	endpoints: builder => ({
		SignIn: builder.mutation({
			query: payload => ({
				url: '/signin',
				method: 'POST',
				body: payload,
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}),
			invalidatesTags: ['Auth'],
		}),
		SignUp: builder.mutation({
			query: payload => ({
				url: '/signup',
				method: 'POST',
				body: payload,
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}),
			invalidatesTags: ['Auth'],
		}),
		GetLists: builder.mutation({
			query: payload => ({
				url: '/lists',
				method: 'GET',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}),
			invalidatesTags: ['Auth'],
		}),
	}),
});
export const { useSignInMutation, useSignUpMutation, useGetListsMutation } =
	apiSlice;
