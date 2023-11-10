import { GlobalApiSlice, TAGS } from "../../service";

export const SignApi = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        getRequest: builder.query({
            query: ({ pagination }: any) => ({
                url: ``,
                method: "GET",
            }),

            providesTags: ["demo"],
        }),
        getRequestJobRoles: builder.query({
            query: () => ({
                url: ``,
                method: "GET",
            }),
            providesTags: ["demo"],
        }),

        getRequestById: builder.query({
            query: ({ id, detail }: any) => ({
                url: `/user=${id}&detail=${detail}`,
                method: "GET",
            }),
            providesTags: ["demo"],
        }),


        postRequest: builder.mutation({
            query: ({ payload, id }: any) => ({
                url: `demo/${id}`, // use the endpoint URL from the argument
                method: "post",
                body: payload,
            }),

            invalidatesTags: ["demo"],
        }),


        postphotoRequest: builder.mutation({
            query: (payload: any) => {
                let formData = new FormData();
                formData.append("file", payload?.file);

                return {
                    url: ``,
                    method: "post",
                    body: formData,
                }
            },

            invalidatesTags: ["demo"],
        }),



        deleteRequest: builder.mutation({
            query: (id: string) => ({
                url: `demo/${id}`, // use the endpoint URL from the argument
                method: "DELETE",
            }),
            invalidatesTags: ["demo"],
        }),


        updateRequest: builder.mutation({
            query: ({ id, payload }: any) => ({
                url: `demo/id=${id}`,
                method: "PATCH",
                body: payload,
            }),

            invalidatesTags: ["demo"],
        }),
        logout: builder.mutation({
            queryFn: () => ({ data: null }),
      
            invalidatesTags: TAGS,
          }),

    }),
});


export const {
    useGetRequestQuery,
    useGetRequestByIdQuery,
    usePostRequestMutation,
    useDeleteRequestMutation,
    useUpdateRequestMutation,
    useGetRequestJobRolesQuery,
    usePostphotoRequestMutation,
    useLogoutMutation        
} = SignApi;
