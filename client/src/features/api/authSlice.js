import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const authSlice = createApi({
	reducerPath: 'authSlice',
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
				credentials: 'include',
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
	}),
});
export const { useSignInMutation, useSignUpMutation, useGetProfileQuery } =
	authSlice;
