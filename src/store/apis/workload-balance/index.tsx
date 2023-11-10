import { GlobalApiSlice } from "../../service";

export const WorkLoadBalanceApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    workLoadBalance: builder.query({
      query: ({startDate, endDate, loggedInUserId, utilization,query }:any) => ({
        url: `/api/report/workload-balance?${query}`,
        method: "GET",
      }),
      providesTags: ["workLoadBalance"],
    }),
  }),
});

export const {
  useWorkLoadBalanceQuery
} = WorkLoadBalanceApi;