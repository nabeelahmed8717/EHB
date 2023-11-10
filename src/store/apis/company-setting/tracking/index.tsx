import { GlobalApiSlice } from "../../../service";

export const CompanyTrackingAPI = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        companyTracking: builder.mutation({
            query: ({ payload }: any) => ({
                url: `/company/company/update`,
                method: "post",
                body: payload,
            }),
            invalidatesTags: ["companyControllerAPIs"],
        }),

    }),
});

export const {
    useCompanyTrackingMutation,
} = CompanyTrackingAPI;
