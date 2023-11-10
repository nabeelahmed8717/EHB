import { GlobalApiSlice } from "../../service";

export const ReportsProjectAndTask = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({

    getProjects: builder.query({
      query: ({ pagination }: any) => ({
        url: `/api/project/all`,
        method: "GET",
        keepUnusedDataFor: 1,
      }),
      providesTags: ["ReportsProjectAndTask", 'ProjectTeams','ProjectMember'],
    }),

    getProjectsDetailsById: builder.query({
      query: ({ projectId }: any) => ({
        url: `/projects/tasks/report/getall?projectId=${projectId}`,
        method: "GET",
        keepUnusedDataFor: 1,
      }),
      providesTags: ["ReportsProjectAndTask"],
    }),

    getProjectsDurationById: builder.query({
      query: ({ taskID }: any) => ({
        url: `/projects/tasks/report/get/task/duration?taskId=${taskID}`,
        method: "GET",
        keepUnusedDataFor: 1,
      }),
      providesTags: ["ReportsProjectAndTask"],
    }),

  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectsDetailsByIdQuery,
  useGetProjectsDurationByIdQuery,
} = ReportsProjectAndTask;
