import { GlobalApiSlice } from "../../service";

export const TopUsersApi = GlobalApiSlice.injectEndpoints({
  
  endpoints: (builder: any) => ({
    getTopUers: builder.query({
      query: ({query,pagination,state }:any) => ({
        url: `/top/users/report?${query}&pageNumber=${state?.exportData==="PDF"? 1:pagination?.page}&pageSize=${state?.exportData==="PDF"?1000:pagination?.limit}`,
        method: "GET",
      }),
      providesTags: ["topUsers"],
    }),

  }),
});

export const {
  useGetTopUersQuery,
 
} = TopUsersApi;
