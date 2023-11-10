import { GlobalApiSlice } from "../../service";

export const UserApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    
    postCreateUser: builder.mutation({
      query: ({ payload }: any) => ({
        url: `https://ehb-be-production.up.railway.app/api/users`,
        method: "POST",
        body: payload,
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  usePostCreateUserMutation,
} = UserApi;
