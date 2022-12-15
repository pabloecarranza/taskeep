import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const authSlice = createApi({
	reducerPath: 'authSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
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
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
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
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
				},
			}),
			invalidatesTags: ['Auth'],
		}),
	}),
});
export const { useSignInMutation, useSignUpMutation, useGetProfileQuery } =
	authSlice;
