import { GlobalApiSlice } from "../../../service";

export const CompanySettingsDepartmentApi = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({

        // ================ POST Department ================
        postDepartment: builder.mutation({
            query: ({ payload }: any) => ({
                url: `/company/createdepartment`,
                method: "POST",
                body: payload,
            }),

            invalidatesTags: ["CompanySettingsDepartmentApis"],

        }),

        // ================ Delete Department ================
        deleteDepartment: builder.mutation({
            query: ({ id }: any) => ({
                url: `/company/deletedepartment?id=${id}`,
                method: "DELETE",
            }),

            invalidatesTags: ["CompanySettingsDepartmentApis"],

        }),



        // ================ GET All Department ================
        getDepartment: builder.query({
            query: ({ pagination }: any) => ({
                url: `/company/departments?${pagination}`,
                method: "GET",
            }),

            providesTags: ["CompanySettingsDepartmentApis"],
        }),


        // ================ GET Single Department ================
        getSingleDepartment: builder.query({
            query: ({ id }: any) => ({
                url: `/company/singledepartment${id}`,
                method: "GET",
            }),

            providesTags: ["CompanySettingsDepartmentApis"],
        }),

    }),
});


export const {
    usePostDepartmentMutation,
    useDeleteDepartmentMutation,
    useGetDepartmentQuery,
    useGetSingleDepartmentQuery,
} = CompanySettingsDepartmentApi;
