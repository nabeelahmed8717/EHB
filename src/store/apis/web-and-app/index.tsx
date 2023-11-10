import { GlobalApiSlice } from "../../service";

export const WebAndAppApi = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        getAllCategory: builder.query({
            query: ({ pagination }: any) => ({
                url: `/webapp/getallcategories?page=${pagination.page}&limit=${pagination.limit}`,
                method: "GET",
            }),
            providesTags: ["InviteUser"],
        }),
        postCreateCategory: builder.mutation({
            query: ({ category, payload }: any) => ({
                url: `webapp/createcategory?$category=${category}`,
                method: "post",
                body: payload,
            }),
            invalidatesTags: ["PostUserinvitation"],
        }),

        postCreateService: builder.mutation({
            query: ({ payload }: any) => ({
                url: `webapp/createservice`,
                method: "post",
                body: payload,
            }),
            invalidatesTags: ["PostUserinvitation"],
        }),

        postCreateException: builder.mutation({
            query: ({ payload }: any) => ({
                url: `webapp/exceptioncreate`,
                method: "post",
                body: payload,
            }),
            invalidatesTags: ["PostUserinvitation"],
        }),



        deleteService: builder.mutation({
            query: (id: string) => ({
                url: `/webapp/deleteservice?serviceId=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["deleteInvitation"],
        }),
        deleteException: builder.mutation({
            query: (id: string) => ({
                url: `/webapp/exception?id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["deleteInvitation"],
        }),

        UserInvitation: builder.mutation({
            query: ({ id }: any) => ({
                url: `/api/user/invitation?id=${id}`,
                method: "PUT",
                body: id,
            }),
            invalidatesTags: ["UserInvitation"],
        }),

        postUserInvitation: builder.mutation({
            query: ({ userId, payload }: any) => ({
                url: `/api/user/invitation`,
                method: "post",
                body: payload,
            }),
            invalidatesTags: ["PostUserinvitation"],
        }),

        resentInvitation: builder.mutation({
            query: ({ userId, payload }: any) => ({
                url: `/api/user/invitation`,
                method: "post",
                body: payload,
            }),
            invalidatesTags: ["resentInvitation"],
        }),

    }),
});


export const {

} = WebAndAppApi;
