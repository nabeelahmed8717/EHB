import { GlobalApiSlice } from "../../service";

export const UserApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    
    postCreateUser: builder.mutation({
      query: ({ payload }: any) => ({
        url: `https://ehb-be-production.up.railway.app/api/users`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Auth"],
    }),
    postLoginUser: builder.mutation({
      query: ({ payload }: any) => ({
        url: `https://ehb-be-production.up.railway.app/api/auth`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  usePostCreateUserMutation,
  usePostLoginUserMutation
} = UserApi;
