import { GlobalApiSlice } from "../../../service";

export const CompanySettingsDesignationApi = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({

        // ================ POST Designation ================
        postDesignation: builder.mutation({
            query: ({ payload }: any) => ({
                url: `/company/createdesignation`,
                method: "POST",
                body: payload,
            }),

            invalidatesTags: ["CompanySettingsDesignationApis"],

        }),

        // ================ Delete Designation ================
        deleteDesignation: builder.mutation({
            query: ({ id }: any) => ({
                url: `/company/deletedesignation?id=${id}`,
                method: "DELETE",
            }),

            invalidatesTags: ["CompanySettingsDesignationApis"],

        }),



        // ================ GET All Designation ================
        getDesignation: builder.query({
            query: ({ pagination }: any) => ({
                url: `/company/designation?${pagination}`,
                method: "GET",
            }),

            providesTags: ["CompanySettingsDesignationApis"],
        }),


        // ================ GET Single Designation ================
        getSingleDesignation: builder.query({
            query: ({ id }: any) => ({
                url: `/company/singledesignation${id}`,
                method: "GET",
            }),

            providesTags: ["CompanySettingsDesignationApis"],
        }),

    }),
});


export const {
    usePostDesignationMutation,
    useDeleteDesignationMutation,
    useGetDesignationQuery,
    useGetSingleDesignationQuery,
} = CompanySettingsDesignationApi;
