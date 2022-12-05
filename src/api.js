import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://638ddf09aefc455fb2ae3cc9.mockapi.io',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts/`,
      providesTags: ['contacts'],
    }),

    deleteContacts: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['contacts'],
    }),

    postContacts: builder.mutation({
      query: contact => ({
        url: '/contacts/',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  usePostContactsMutation,
} = contactsApi;

export {
  useGetContactsQuery,
  useDeleteContactsMutation,
  usePostContactsMutation,
};
