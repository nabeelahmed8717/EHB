import { GlobalApiSlice } from "../../service";

export const BlockingApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getBlockingAll: builder.query({
      query: ({ query,pagination}: any) => ({
        url: `/blocking/getall?${pagination}&${query}`,
        method: "GET",
      }),
      providesTags: ["blocking"],
    }),

    postBlocking: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/blocking/create`,
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["blocking"],
    }),
    deleteBlocking: builder.mutation({
      query: (id: string) => ({
        url: `/blocking/delete?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blocking"],
    }),
    updateStatusBlocking: builder.mutation({
      query: ({payload}: any) => ({
        url: `/blocking/update/status?blockingId=${payload.id}&status=${payload.status}`,
        method: "PUT",
      }),
      invalidatesTags: ["blocking"],
    }),
  }),
});

export const {
  useGetBlockingAllQuery,
  usePostBlockingMutation,
  useDeleteBlockingMutation,
  useUpdateStatusBlockingMutation,
} = BlockingApi;
