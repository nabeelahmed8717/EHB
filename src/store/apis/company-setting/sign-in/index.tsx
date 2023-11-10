import { GlobalApiSlice } from "../../../service";

export const companySignInAPI = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        companySignIn: builder.mutation({
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
    useCompanySignInMutation,
} = companySignInAPI;
