import { GlobalApiSlice } from "../../service";

export const ActivityLogApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getActivityLog: builder.query({
      query: ({ query, pagination }: any) => ({
        url: `/activitylog/report/getall?${query}&${pagination}`,
        method: "GET",
      }),

      providesTags: ["GetActivityLogData"],
    }),

  }),
});


export const {
  useGetActivityLogQuery,
} = ActivityLogApi;
