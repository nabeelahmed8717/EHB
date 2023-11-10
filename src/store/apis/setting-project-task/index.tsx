import { GlobalApiSlice } from "../../service";

export const ProjectTaskApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getSettingProjects: builder.query({
      query: ({ pagination,query }: any) => ({
        url: `/api/project?page=${pagination.page}&limit=${pagination.limit}${query}`,
        method: "GET",
      }),
      providesTags: ["SettingActiveProject"],
    }),

    updateProject: builder.mutation({
      query: ({ id, payload }: any) => ({
        url: `/api/project?id=${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["SettingActiveProject"],
    }),

    postProject: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/api/project`,
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["SettingActiveProject"],
    }),

    deleteProject: builder.mutation({
      query: ({ id }: any) => ({
        url: `/api/project?ids=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SettingActiveProject","TeamData"],
    }),

    SettinggetProjectById: builder.query({
      query: ({ id }: any) => ({
        url: `/api/project/${id}`,
        method: "GET",
      }),

      providesTags: ["SettingActiveProject"],
    }),

    activeProject: builder.mutation({
      query: ({ id }: any) => ({
        url: `/api/project/active?ids=${id}`,
        method: "PUT",
        body: id,
      }),
      invalidatesTags: ["SettingActiveProject","TeamData"],
    }),

    archiveProject: builder.mutation({
      query: ({ id }: any) => ({
        url: `/api/project/archive?ids=${id}`,
        method: "PUT",
        body: id,
      }),
      invalidatesTags: ["SettingActiveProject"],
    }),

    getArchivedProject: builder.query({
      query: ({ pagination,query }: any) => ({
        url: `/api/project/archived?page=${pagination.page}&limit=${pagination.limit}${query}`,
        method: "GET",
      }),

      providesTags: ["SettingActiveProject"],
    }),

    postDuplicateProject: builder.mutation({
      query: ({ id }: any) => ({
        url: `/api/project/duplicate?id=${id}`,
        method: "post",
      }),
      invalidatesTags: ["SettingActiveProject"],
    }),

    //project tasks
    getProjectTasksByID: builder.query({
      query: ({ pagination, projectId, query }: any) => ({
        url: `/api/project/tasks/${projectId}?page=${pagination.page}&limit=${pagination.limit}${query} `,
        method: "GET",
      }),
      providesTags: ["ProjectTask"],
    }),

    postProjectTask: builder.mutation({
      query: ({ id, payload }: any) => ({
        url: `/api/project/task?id=${id}`,
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["ProjectTask"],
    }),

    updateProjectTask: builder.mutation({
      query: ({ id, payload }: any) => ({
        url: `/api/project/task?id=${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["ProjectTask"],
    }),

    deleteProjectTask: builder.mutation({
      query: ({ id }: any) => ({
        url: `/api/project/task?ids=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProjectTask","TeamData"],
    }),

    //project Member
    getProjectMembersByID: builder.query({
      query: ({ pagination, projectId, query }: any) => ({
        url: `/api/project/members/${projectId}?page=${pagination.page}&limit=${pagination.limit} ${query}`,
        method: "GET",
      }),
      providesTags: ["ProjectMember"],
    }),

    postProjectMember: builder.mutation({
      query: ({ id, payload }: any) => ({
        url: `/api/project/member?id=${id}`,
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["ProjectMember"],
    }),
    deleteProjectMember: builder.mutation({
      query: ({ id, ids }: any) => ({
        url: `/api/project/member?id=${id}&ids=${ids}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProjectMember"],
    }),

    //project teams
    getProjectTeamsByID: builder.query({
      query: ({ projectId, pagination, query }: any) => ({
        url: `/api/project/teams/${projectId}?page=${pagination.page}&limit=${pagination.limit}${query}`,
        method: "GET",
      }),
      providesTags: ["ProjectTeams","TeamData"],
    }),

    postProjectTeam: builder.mutation({
      query: ({ id, payload }: any) => ({
        url: `/api/project/team?id=${id}`,
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["ProjectTeams","TeamData"],
    }),

    deleteProjectTeam: builder.mutation({
      query: ({ id, ids }: any) => ({
        url: `/api/project/team?id=${id}&ids=${ids}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProjectTeams","TeamData"],
    }),
  }),
});

export const {
  useGetSettingProjectsQuery,
  useUpdateProjectMutation,
  usePostProjectMutation,
  useDeleteProjectMutation,
  useActiveProjectMutation,
  useArchiveProjectMutation,

  useGetProjectMembersByIDQuery,
  usePostProjectMemberMutation,

  useGetProjectTeamsByIDQuery,
  usePostProjectTeamMutation,
  useDeleteProjectTeamMutation,

  useGetProjectTasksByIDQuery,

  useGetArchivedProjectQuery,
  usePostDuplicateProjectMutation,
  useDeleteProjectMemberMutation,
  useUpdateProjectTaskMutation,
  usePostProjectTaskMutation,
  useDeleteProjectTaskMutation,
} = ProjectTaskApi;
