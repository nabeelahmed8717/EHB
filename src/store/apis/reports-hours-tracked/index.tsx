import { GlobalApiSlice } from "../../service";

export const ReportsHoursTracked = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({

    getHoursTracked: builder.query({
      query: ({ startDate, endDate, loggedInUserId }: any) => ({
        url: `/api/report/hours-tracked?from=${startDate}&to=${endDate}&loggedInUserId=${loggedInUserId}`,
        method: "GET",
        keepUnusedDataFor: 1,
      }),
      providesTags: ["ReportsHoursTracked"],
    }),
  }),
});

export const {
  useGetHoursTrackedQuery
} = ReportsHoursTracked;
