import { GlobalApiSlice } from "../../service"

export const UserAccount = GlobalApiSlice.injectEndpoints({

    endpoints: (builder: any) => ({

        getUserDetails: builder.query({
            query: ({ id }: any) => ({
                url: `/useraccount/getDetails?id=${id}`,
                method: "GET",
            }),
            providesTags: ["UserAccount"],
        }),

        updateUserAccount: builder.mutation({
            query: ({ payload }: any) => ({
                url: `/useraccount/update`,
                method: "put",
                body: payload,
            }),
            invalidatesTags: ["UserAccount"],
        }),




        updateUserProfileImage: builder.mutation({
            query: ({ payload }: any) => ({
                url: `/useraccount/profile/Image`,
                method: "put",
                body: payload
            }),
            invalidatesTags: ["UserAccount"],
        }),


        updateUserAccountName: builder.mutation({
            query: ({ payload }: any) => ({
                url: `/useraccount/name/update`,
                method: "put",
                body: payload,
            }),
            invalidatesTags: ["UserAccount"],
        }),

    }),

})

export const {
    useGetUserDetailsQuery,
    useUpdateUserAccountMutation,
    useUpdateUserProfileImageMutation,
    useUpdateUserAccountNameMutation
} = UserAccount;