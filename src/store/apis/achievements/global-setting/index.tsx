import { GlobalApiSlice } from "../../../service";

export const GlobalSettingApi = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        getGlobalSetting: builder.query({
            query: ({ id }: any) => ({
                url: `/achievements/globalsetting/getsingle/${id}`,
                method: "GET",
            }),

            providesTags: ["GlobalSetting"],
        }),
        postGlobalSetting: builder.mutation({
            query: ({userId, payload}:any) => ({
              url: `/achievements/globalsetting/create`,
              method: "post",
              body: payload,
            }),
            invalidatesTags: ["GlobalSetting"],
        }),
        // User Exception 
        getUserExceptionData: builder.query({
            query: ({ query, pagination }: any) => ({
                // url: `/userexception/getall?pageNumber=1&pageSize=9${query}`,
                url: `/userexception/getall?${pagination}${query}`,
                method: "get",
            }),
            providesTags: ["GlobalSetting"],
        }),

        // Create 
        postUserException: builder.mutation({
            query: ({payload}:any) => ({
              url: `/userexception/create`,
              method: "post",
              body: payload,
            }),
            invalidatesTags: ["GlobalSetting"],
        }),

        // Update
        updateUserException: builder.mutation({
            query: ({payloadEdit}:any) => ({
              url: `/userexception/update`,
              method: "PUT",
              body: payloadEdit,
            }),
            invalidatesTags: ["GlobalSetting"],
        }),

        getUsers: builder.query({
            query: ({ id }: any) => ({
                url: `/api/users/active?page=1&limit=1000`,
                method: "GET",
            }),
            
            providesTags: ["GlobalSetting"],
        }),

        getTeamsData: builder.query({
            query: ({ id }: any) => ({
                url: `/api/team?page=1&limit=10000`,
                method: "GET",
            }),

            providesTags: ["GlobalSetting"],
        }),

        deleteUserException: builder.mutation({
            query: ({id }: any) => ({
              url: `/userexception/delete?id=${id}`,
              method: "DELETE",
              keepUnusedDataFor: 1,
            }),
            invalidatesTags: ["GlobalSetting"],
        }),

        updatePerformanceEvaluationStatus: builder.mutation({
            query: ({id, status }: any) => ({
              url: `/userexception/performancevaluation?performanceEvaluation=${status}&id=${id}`,
              method: "put",
              keepUnusedDataFor: 1,
            }),
            invalidatesTags: ["GlobalSetting"],
        }),

        getUserExceptionByID: builder.query({
            query: ({ id }: any) => ({
                url: `userexception/single?id=${id}`,
                method: "GET",
            }),

            providesTags: ["GlobalSetting"],
        }),
    }),
});

export const {
    useGetGlobalSettingQuery,
    usePostGlobalSettingMutation,
    useGetUserExceptionDataQuery,
    usePostUserExceptionMutation,
    useGetUsersQuery,
    useGetTeamsDataQuery,
    useDeleteUserExceptionMutation,
    useGetUserExceptionByIDQuery,
    useUpdateUserExceptionMutation,
    useUpdatePerformanceEvaluationStatusMutation,

} = GlobalSettingApi;
