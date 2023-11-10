import { GlobalApiSlice } from "../../service";

export const timeSheetAPI = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({

        // ================ GET All Active Teams ================
        getTimeSheet: builder.query({
            query: ({query,pagination}:any) => ({
                url: `timesheet/report/report?${query}&${pagination}`,
                method: "GET",
            }),

            providesTags: ["timeSheetAPIs"],
        }),
        postMailTimeSheet: builder.mutation({
            query: ({ payload }: any) => ({
              url: `/timesheet/report/mailTimeSheet`,
              method: "post",
              body: payload,
            }),
            invalidatesTags: ["timeSheetAPIs"],
          }),

          postManualTime: builder.mutation({
            query: ({ query }: any) => ({
              url: `/timesheet/report/addManualTime?${query}`,
              method: "post",
            //   body: payload,
            }),
            invalidatesTags: ["timeSheetAPIs"],
          }),
          getNotificationAccessToken: builder.query({
            query: () => ({
                url: `/notifications/accesstoken`,
                method: "GET",
            }),

            providesTags: ["timeSheetAPIs"],
        }),

    }),
   
});


export const {
    useGetTimeSheetQuery,
    usePostMailTimeSheetMutation,
    usePostManualTimeMutation,
    useGetNotificationAccessTokenQuery
} = timeSheetAPI;
