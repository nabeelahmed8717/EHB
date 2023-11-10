import { GlobalApiSlice } from "../../service";

export const WorkScheduleApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({



    //shifts
    getShift: builder.query({
      query: ({ pagination }: any) => ({
        url: `/api/getshift?${pagination}`,
        method: "GET",
      }),

      providesTags: ["WorkSchedule"],
    }),



    postAddShifts: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/api/shift`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["WorkSchedule"],
    }),



    updateShifts: builder.mutation({
      query: ({ id, payload }: any) => ({
        url: `/api/shift?id=${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["WorkSchedule"],
    }),



    deleteShifts: builder.mutation({
      query: (id: number) => ({
        url: `/api/shift/delete?ids=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["WorkSchedule"],
    }),



    //workSchedule
    getWorkSchedule: builder.query({
      query: ({ pagination }: any) => ({
        url: `/api/workSchedule?${pagination}`,
        method: "GET",
      }),

      providesTags: ["WorkSchedule"],
    }),




    postAddWorkSchedule: builder.mutation({
      query: ({ updatePayload }: any) => ({
        url: `/api/workSchedule${updatePayload?.payloadQuery}`,
        method: "POST",
        body: updatePayload?.payload,
      }),
      invalidatesTags: ["WorkSchedule"],
    }),




    updateWorkSchedule: builder.mutation({
      query: ({ id, payload }: any) => ({
        url: `/api/workSchedule?id=${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["WorkSchedule"],
    }),



    deleteWorkSchedule: builder.mutation({
      query: ({ id }: any) => ({
        url: `/api/workSchedule?ids=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["WorkSchedule"],
    }),




  }),
});

export const {
  useGetShiftQuery,
  usePostAddShiftsMutation,
  useUpdateShiftsMutation,
  useDeleteShiftsMutation,
  useGetWorkScheduleQuery,
  usePostAddWorkScheduleMutation,
  useDeleteWorkScheduleMutation,
  useUpdateWorkScheduleMutation
} = WorkScheduleApi;
