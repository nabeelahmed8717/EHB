import { GlobalApiSlice } from "../../service";

export const SettingCompanyApi = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        getCompanyRequest: builder.query({
            query: () => ({
                url: `/api/workSchedule?page=0&limit=10`,
                method: "GET",
            }),
            providesTags: ["demo"],
        }),

        getDepartmentsRequest: builder.query({
            query: () => ({
                url: `/company/departments?pageNumber=1&pageSize=10`,
                method: "GET",
            }),
            providesTags: ["GetAllValuesForInviteUser"],
        }),

        getDesignationRequest: builder.query({
            query: () => ({
                url: `/company/designation?pageNumber=1&pageSize=10`,
                method: "GET",
            }),
            providesTags: ["GetAllValuesForInviteUser"],
        }),

        // getRequestJobRoles: builder.query({
        //     query: () => ({
        //         url: ``,
        //         method: "GET",
        //     }),
        //     providesTags: ["demo"],
        // }),

        // getRequestById: builder.query({
        //     query: ({ id, detail }: any) => ({
        //         url: `/user=${id}&detail=${detail}`,
        //         method: "GET",
        //     }),
        //     providesTags: ["demo"],
        // }),


        // postRequest: builder.mutation({
        //     query: ({ payload, id }: any) => ({
        //         url: `demo/${id}`, // use the endpoint URL from the argument
        //         method: "post",
        //         body: payload,
        //     }),

        //     invalidatesTags: ["demo"],
        // }),


        // postphotoRequest: builder.mutation({
        //     query: (payload: any) => {
        //         let formData = new FormData();
        //         formData.append("file", payload?.file);

        //         return {
        //             url: ``,
        //             method: "post",
        //             body: formData,
        //         }
        //     },

        //     invalidatesTags: ["demo"],
        // }),



        // deleteRequest: builder.mutation({
        //     query: (id: string) => ({
        //         url: `demo/${id}`, // use the endpoint URL from the argument
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ["demo"],
        // }),


        // updateRequest: builder.mutation({
        //     query: ({ id, payload }: any) => ({
        //         url: `demo/id=${id}`,
        //         method: "PATCH",
        //         body: payload,
        //     }),

        //     invalidatesTags: ["demo"],
        // }),

    }),
});


export const {
    // useGetRequestQuery,
    // useGetRequestByIdQuery,
    // usePostRequestMutation,
    // useDeleteRequestMutation,
    // useUpdateRequestMutation,
    // useGetRequestJobRolesQuery,
    // usePostphotoRequestMutation,   

    useGetCompanyRequestQuery,
    useGetDepartmentsRequestQuery,
    useGetDesignationRequestQuery,
} = SettingCompanyApi;
