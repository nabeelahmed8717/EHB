import { GlobalApiSlice } from "../../service";

export const DistractionAlertsApi = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
      

        getAllDistractionAlerts: builder.query({
            query: ({ query,pagination }: any) => ({
                url: `/distractionalerts/distraction/getall?${query}&${pagination}`,
                method: "GET",
            }),

            providesTags: ["AllDistractionAlert"],
        }),

        postDistractionAlerts: builder.mutation({
            query: ({userId, payload}:any) => ({
              url: `/distractionalerts/create`,
              method: "post",
              body: payload,
            }),
            invalidatesTags: ["AllDistractionAlert"],
          }),

          postDistractionAlertsSearch: builder.mutation({
            query: ({keyword, payload}:any) => ({
              url: `/distractionalerts/search?keyword=${keyword}&pageNumber=1&pageSize=10`,
              method: "post",
              body: payload,
            }),
            invalidatesTags: ["AllDistractionAlert"],
          }),


        deleteDistractionAlerts: builder.mutation({
            query: (id: string) => ({
              url: `/distractionalerts/delete?id=${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ["AllDistractionAlert"],
          }),

          deleteSingleDistractionAlerts: builder.mutation({
            query: (id: string) => ({
              url: `/distractionalerts/deletesingle?id=${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ["AllDistractionAlert"],
          }),

    }),
});


export const {
    useGetAllDistractionAlertsQuery,
    usePostDistractionAlertsMutation,
    usePostDistractionAlertsSearchMutation,
     useDeleteDistractionAlertsMutation,
     useDeleteSingleDistractionAlertsMutation,
} = DistractionAlertsApi;
