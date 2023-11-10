import { GlobalApiSlice } from "../../service";

export const attendanceApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getAttendanceData: builder.query({
      query: ({startDate,endDate,id,query}:any) => ({
        url: `/api/report/attendance/my?from=${startDate}&to=${endDate}&userId=${id}&${query}`,
        method: "GET",
      }),
      providesTags: ["attendance"],
    }),
    getAttendanceOtherData: builder.query({
      query: ({startDate,endDate,id,query}:any) => ({
        url: `/api/report/attendance/others?from=${startDate}&to=${endDate}&loggedInUserId=${id}${query}`,
        method: "GET",
      }),
      providesTags: ["attendanceOthers"],
    }),

  }),
});

export const {
 useGetAttendanceDataQuery,
 useGetAttendanceOtherDataQuery
 
} = attendanceApi;
