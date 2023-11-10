import { GlobalApiSlice } from "../../service";

export const ApplyWorkScheduledAPI = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({


        // // ================ GET All Active Users ================
        // getWorkScheduleActiveUsers: builder.query({
        //     query: ({ pagination }: any) => ({
        //         url: `/api/users/active?${pagination}`,
        //         method: "GET",
        //     }),

        //     providesTags: ["ApplyWorkScheduledAPIs"],
        // }),


        // ================ GET All Active Teams ================
        getWorkScheduleActiveTeam: builder.query({
            query: () => ({
                url: `/api/team?page=1&limit=100`,
                method: "GET",
            }),

            providesTags: ["ApplyWorkScheduledAPIs"],
        }),



        // ================ GET Active Users with Filter ================
        getFromWorkScheduleUserFilter: builder.query({
            query: ({ query, pagination }: any) => ({
                url: `/api/filteredWorkSchedule?${query}`,
                method: "GET",
            }),

            providesTags: ["ApplyWorkScheduledAPIs"],
        }),



        updateUserShift: builder.mutation({
            query: ({ userId, newShiftId }: any) => ({
                url: `/api/updateUserShift?userID=${userId}&New%20Shift%20Id=${newShiftId}`,
                method: "PUT",
            }),
            invalidatesTags: ["ApplyWorkScheduledAPIs, ManageActiveUser"],
        }),


    }),
});


export const {
    // useGetWorkScheduleActiveUsersQuery,
    useGetWorkScheduleActiveTeamQuery,
    useGetFromWorkScheduleUserFilterQuery,
    useUpdateUserShiftMutation,
} = ApplyWorkScheduledAPI;
