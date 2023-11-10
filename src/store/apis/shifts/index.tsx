import { GlobalApiSlice } from "../../service";

export const ShiftApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getShift: builder.query({
      query: ({ pagination }: any) => ({
        url: `/api/shift?page=0&limit=50`,
        method: "GET",
      }),

      providesTags: ["GetShift"],
    }),

    updateShift: builder.mutation({
      query: ({ id }: any) => ({
        url: `/api/shift?id=${id}`,
        method: "PUT",
        body: id,
      }),
      invalidatesTags: ["UpdateShift"],
    }),

    postShift: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/api/shift`,
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["PostShift"],
    }),

    deleteShift: builder.mutation({
      query: (id: string) => ({
        url: `/api/shift?ids=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteShift"],
    }),
  }),
});

export const {
  useGetShiftQuery,
  useUpdateShiftMutation,
  usePostShiftMutation,
  useDeleteShiftMutation,
} = ShiftApi;
