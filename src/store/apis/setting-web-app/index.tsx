import { GlobalApiSlice } from "../../service";

export const WebAppApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    postTagged: builder.query({
      query: ({ query,pagination }: any) => ({
        url: `/webapp/tagged/getall?&${pagination}${query}`,
        method: "GET",
      }),

      providesTags: ["createService"],
    }),

    getCategories: builder.query({
      query: ({ query , pagination}: any) => ({
        url: `/webapp/categories/getall?${query}&${pagination}`,
        method: "GET",
      }),

      providesTags: ["webappCategories"],
    }),

    getException: builder.query({
      query: ({ query,pagination }: any) => ({
        url: `/webapp/exception/getall?${query}&${pagination}`,
        method: "GET",
      }),

      providesTags: ["GetExceptionData"],
    }),

    deleteException: builder.mutation({
      query: (id: string) => ({
        url: `/webapp/exception/delete?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["GetExceptionData"],
    }),

    postCreateCategory: builder.mutation({
      query: ( {payload} : any) => ({
        url: `/webapp/createcategory`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["webappCategories"],
    }),

    deleteCategory: builder.mutation({
      query: (id: string) => ({
        url: `/webapp/deleted/category?categoryid=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["webappCategories"],
    }),

    postCreateService: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/webapp/createservice`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["createService"],
    }),

    getAllServices: builder.query({
      query: ({ pagination }: any) => ({
        url: `/webapp/getallservices?pageNumber=${pagination.page}&pageSize=${pagination.limit}`,
        method: "GET",
      }),

      providesTags: ["createService"],
    }),

    getAllPending: builder.query({
      query: ({ query ,pagination}: any) => ({
        url: `/webapp/pending/getall?${pagination}${query}`,
        method: "GET",
      }),

      providesTags: ["createService"],
    }),


    getServicesByCategory: builder.query({
      query: ({ payload }: any) => ({
        url: `/webapp/findbycategory?category=${payload}`,
        method: "GET",
      }),

      providesTags: ["createService"],
    }),

    getFindByProductivityStatus: builder.query({
      query: ({ payload }: any) => ({
        url: `/webapp/findbyproductivitystatus?status=${payload}`,
        method: "GET",
      }),

      providesTags: ["createService"],
    }),

    getPendingSearch: builder.query({
      query: ({ payload }: any) => ({
        url: `/webapp/pendingsearch?keword=${payload}`,
        method: "GET",
      }),

      providesTags: ["createService"],
    }),

    getTaggedByCategory: builder.query({
      query: ({ payload }: any) => ({
        url: `/webapp/taggedcategory?category=${payload}`,
        method: "GET",
      }),

      providesTags: ["createService"],
    }),

    getTaggedSearch: builder.query({
      query: ({ payload }: any) => ({
        url: `/webapp/taggedsearch?keyword=${payload}`,
        method: "GET",
      }),

      providesTags: ["createService"],
    }),

    UpdateCategory: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/webapp/updatecategory`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["createService"],
    }),

    UpdateStatus: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/webapp/updateproductivitystatus`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["createService"],
    }),

    UpdateScreencasts: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/webapp/updatenoofscreencasts`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["createService"],
    }),

    UpdateExceptionActive: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/webapp/updatexceptionactive`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["GetExceptionData"],
    }),

    postException: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/webapp/createexception`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["GetExceptionData"],
    }),

    
  }),
});


export const {
  usePostTaggedQuery,
  useGetCategoriesQuery,
  useGetExceptionQuery,
  useDeleteExceptionMutation,
  usePostCreateCategoryMutation,
  useDeleteCategoryMutation,
  usePostCreateServiceMutation,
  useGetAllServicesQuery,
  useGetAllPendingQuery,
  useGetServicesByCategoryQuery,
  useGetFindByProductivityStatusQuery,
  useGetPendingSearchQuery,
  useGetTaggedByCategoryQuery,
  useGetTaggedSearchQuery,
  useUpdateCategoryMutation,
  useUpdateStatusMutation,
  useUpdateScreencastsMutation,
  useUpdateExceptionActiveMutation,
  usePostExceptionMutation,
} = WebAppApi;
