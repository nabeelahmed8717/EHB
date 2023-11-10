import { GlobalApiSlice } from "../../service";

export const InviteUserApi = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        getInviteUser: builder.query({
            query: ({ query , pagination}: any) => ({
                url: `/api/user/invitations?${pagination}${query}`,
                method: "GET",
            }),

            providesTags: ["InviteUser","CompanySettingsDesignationApis","CompanySettingsDepartmentApis"],
        }),

        deleteInvitation: builder.mutation({
            query: ({userId}: any) => ({
              url: `/api/user/invitation?ids=${userId}`,
              method: "DELETE",
            }),
            invalidatesTags: ["InviteUser"],
          }),

          UserInvitation: builder.mutation({
            query: ({ id,payload }: any) => ({
              url: `/api/user/invitation?id=${id}`,
              method: "PUT",
              body: payload,
            }),
            invalidatesTags: ["InviteUser"],
          }),

          postUserInvitation: builder.mutation({
            query: ({payload}:any) => ({
              url: `/api/user/invitation`,
              method: "post",
              body: payload,
            }),
            invalidatesTags: ["InviteUser"],
          }),

          resentInvitation: builder.mutation({
            query: ({id,payload}:any) => ({
              url: `/api/user/invitation/resend?id=${id}`,
              method: "post",
            }),
            invalidatesTags: ["InviteUser"],
          }),

          getInviteUserStatus: builder.query({
            query: ({ pagination}: any) => ({
                url: `/api/invitation/status?${pagination}`,
                method: "GET",
            }),

            providesTags: ["InviteUser"],
        }),

    }),
});


export const {
    useGetInviteUserQuery,
    useDeleteInvitationMutation,
    useUserInvitationMutation,
    usePostUserInvitationMutation,
    useResentInvitationMutation,
    useGetInviteUserStatusQuery,
} = InviteUserApi;
