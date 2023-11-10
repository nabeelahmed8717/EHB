import { GlobalApiSlice } from "../../service";

export const BlockingApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
   
    postCustomized: builder.mutation({
      query: ({ payload }: any) => ({
        url: `customize/report/get`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["customized"],
    }),
    
  }),
});

export const {

  usePostCustomizedMutation,

} = BlockingApi;