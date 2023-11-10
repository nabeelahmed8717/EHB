import { GlobalApiSlice } from "../../service";

export const ScreenCastSlice = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({

    getScreenCasts: builder.query({
      query: ({ startDate, endDate, userId, teamId, pageSize, pageNumber, query }: any) => ({
        url: `/api/screencast/services?pageNumber=${pageNumber}&pageSize=${pageSize}&from=${startDate}&to=${endDate}${query}`,
        method: "GET", 
        keepUnusedDataFor: 1,
      }),
      providesTags: ["screenCast"],
    }),

    deleteScreenCast: builder.mutation({
      query: ({ id }: any) => ({
        url: `/api/deleteScreencast?screencastIds=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["screenCast"],
    }),
    // downloadScreenCasts: builder.query({
    //   query: ({ screencastIds }: any) => ({
    //     url: `/api/downloadImages?screencastIds=685`,
    //     method: "GET",
    //     keepUnusedDataFor: 1,
    //   }),
    //   providesTags: ["screenCast"],
    // }),
  }),
});

export const {
  useGetScreenCastsQuery,
  useDeleteScreenCastMutation,
  // useDownloadScreenCastsQuery,
} = ScreenCastSlice;
