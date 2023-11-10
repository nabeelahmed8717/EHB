import { GlobalApiSlice } from "../../../service";

export const UserExceptionApi = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({

        postUserException: builder.mutation({
            query: ({ payload }: any) => ({
                url: `/userexception/create`,
                method: "post",
                body: payload,
            }),
            invalidatesTags: ["UserException"],
        }),

        deleteUserException: builder.mutation({
            query: (id: string) => ({
                url: `/userexception/delete?id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["UserException"],
        }),

        getUserExceptionAll: builder.mutation({
            query: ({ payload }: any) => ({
                url: `/userexception/getall?pageNumber=1&pageSize=1`,
                method: "POST",
            }),
            invalidatesTags: ["UserException"],
        }),

        updatePerformanceEvaluation: builder.mutation({
            query: ({ id, isEvaluation }: any) => ({
                url: `/userexception/performancevaluation?performanceEvaluation=${isEvaluation}&id=${id}`,
                method: "PUT",
                body: id,
            }),
            invalidatesTags: ["PerformanceEvaluation"],
        }),

        getUserException: builder.query({
            query: ({ id }: any) => ({
                url: `/userexception/single?id=${id}`,
                method: "GET",
            }),

            providesTags: ["UserException"],
        }),

    }),
});


export const {
    usePostUserExceptionMutation,
    useDeleteUserExceptionMutation,
    useGetUserExceptionAllQuery,
    useUpdatePerformanceEvaluationMutation,
    useGetUserExceptionQuery,
} = UserExceptionApi;
