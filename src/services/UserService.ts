import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../models/IUser'

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit: number = 5) => ({
        url: '/profile',
        params: {
          _limit: limit,
        },
      }),
      providesTags: result => ['User'],
    }),
    createUser: build.mutation<IUser, IUser>({
      query: user => ({
        url: '/profile',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    updateUser: build.mutation<IUser, IUser>({
      query: user => ({
        url: `/profile/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: build.mutation<IUser, IUser>({
      query: user => ({
        url: `/profile/${user.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
})
