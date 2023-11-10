import { GlobalApiSlice } from "../../../service";

export const organizationInformationAPI = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({



        uploadToS3: builder.mutation({
            query: ({ payload }: any) => ({
                url: '/upload', // Replace with your upload endpoint
                method: 'POST',
                body: payload,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }),
        }),


        updateOrganizationInformation: builder.mutation({
            query: ({ payload }: any) => ({
                url: `/company/profile/logoupload`,
                method: "post",
                body: payload
            }),
            invalidatesTags: ["companyControllerAPIs"],
        }),



        getSingleCompanyInfo: builder.query({
            query: ({ query }: any) => ({
                url: `/company/singlecompany?id=${query}`,
                method: "GET",
            }),
            providesTags: ["companyControllerAPIs"],
        }),


        getSingleCompanyLogo: builder.query({
            query: ({ id }: any) => ({
                url: `/useraccount/company/logo/imageview/${id}`,
                method: "GET",
            }),
            providesTags: ["companyControllerAPIs"],
        }),






    }),
});

export const {
    useUploadToS3Mutation,
    useUpdateOrganizationInformationMutation,
    useGetSingleCompanyInfoQuery,
    useGetSingleCompanyLogoQuery,
} = organizationInformationAPI;
