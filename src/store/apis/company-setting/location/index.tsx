import { GlobalApiSlice } from "../../../service";

export const AchievementsApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    postLocation: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/location/create`,
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["Location"],
    }),

    deleteLocation: builder.mutation({
      query: ({ id }: any) => ({
        url: `/location/delete?id=${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["Location"],
    }),
    getAllLocation: builder.query({
      query: ({ pagination }: any) => ({
        url: `/location/getall?${pagination}`,
        method: "GET",
      }),
      providesTags: ["Location"],
    }),

    postSingleLocation: builder.mutation({
      query: ({ id, payload }: any) => ({
        url: `/location/getsingle?id=${id}`,
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["Location"],
    }),

    updateLocation: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/location/update`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Location"],
    }),
  }),
});

export const {
  useDeleteLocationMutation,
  usePostLocationMutation,
  useGetAllLocationQuery,
  usePostSingleLocationMutation,
  useUpdateLocationMutation,
} = AchievementsApi;
