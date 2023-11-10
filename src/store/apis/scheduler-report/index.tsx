import { GlobalApiSlice } from "../../service";

export const SchedulerReportApi = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({

        // ================ POST Scheduler Report ================
        postScheduledReport: builder.mutation({
            query: ({ payload }: any) => ({
                url: `/scheduler/report/create`,
                method: "POST",
                body: payload,
            }),

            invalidatesTags: ["GetSchedulerReport"],

        }),


        // ================ Put Scheduler Report Active ================
        updateScheduledReportActive: builder.mutation({
            query: ({ query }: any) => ({
                url: `scheduler/report/${query}`,
                method: "PUT",
            }),

            invalidatesTags: ["GetSchedulerReport"],

        }),


        // ================ GET All Scheduler Report ================
        getAllSchedulerReport: builder.query({
            query: ({ pagination }: any) => ({
                url: `/scheduler/report/getall?${pagination}`,
                method: "GET",
            }),

            providesTags: ["GetSchedulerReport"],
        }),


        getSigleSchedulerReport: builder.query({
            query: ({ id }: any) => ({
                url: `/scheduler/report/single/report?${id}`,
                method: "GET",
            }),

            providesTags: ["GetSchedulerReport"],
        }),


        getAllReports: builder.query({
            query: () => ({
                url: `scheduler/report/list?pageNumber=1&pageSize=20`,
                method: "GET",
            }),
        }),


        // ================ Delete Single Scheduler Report ================
        deleteSingleSchedulerReport: builder.mutation({
            query: ({ id }: any) => ({
                url: `/scheduler/report/singledelete?id=${id}`,
                method: "DELETE",
            }),

            invalidatesTags: ["GetSchedulerReport"],

        }),



        // ================ Delete All Scheduler Report ================
        deleteAllSchedulerReport: builder.mutation({
            query: ({ id }: any) => ({
                url: `/scheduler/report/delete`,
                method: "DELETE",
                body: id
            }),

            invalidatesTags: ["GetSchedulerReport"],

        }),




        // ================ GET Single Scheduler Report ================
        getSchedulerListReport: builder.query({
            query: ({ list, pagination }: any) => ({
                url: `/scheduler/report/ListRepots${list}&${pagination}`,
                method: "GET",
            }),

            providesTags: ["GetSchedulerReport"],
        }),
    }),
});


export const {
    usePostScheduledReportMutation,
    useUpdateScheduledReportActiveMutation,
    useGetAllSchedulerReportQuery,
    useGetSigleSchedulerReportQuery,
    useGetAllReportsQuery,
    useDeleteSingleSchedulerReportMutation,
    useDeleteAllSchedulerReportMutation,
    useGetSchedulerListReportQuery,
} = SchedulerReportApi;
