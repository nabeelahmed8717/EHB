import { GlobalApiSlice } from "../../../service";

export const comapnyBurnOutAPI = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        companyBurnOut: builder.mutation({
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
    useCompanyBurnOutMutation,
} = comapnyBurnOutAPI;
