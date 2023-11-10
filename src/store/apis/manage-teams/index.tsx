import { GlobalApiSlice } from "../../service";

export const ManageTeamsApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getTeams: builder.query({
      query: ({query,paginationTeam}: any) => ({
        url: `/api/team/search?page=${paginationTeam?.page}&limit=${paginationTeam?.limit}${query}`,
        method: "GET",
      }),

      providesTags: ["TeamData","SettingActiveProject"],
    }),

    updateTeam: builder.mutation({
      query: ({ id,payload }: any) => ({
        url: `/api/team?id=${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["TeamData"],
    }),

    postTeam: builder.mutation({
      query: ({ payload }: any) => ({
        url: `/api/team`,
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["TeamData"],
    }),

    deleteTeam: builder.mutation({
      query: (id: string) => ({
        url: `/api/team?ids=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TeamData"],
    }),

    updateActiveTeam: builder.mutation({
      query: (id : string) => ({
        url: `/api/team/active?ids=${id}`,
        method: "PUT",
        body: id,
      }),
      invalidatesTags: ["TeamData"],
    }),

    updateArchiveTeam: builder.mutation({
      query: (id : string) => ({
        url: `/api/team/archive?ids=${id}`,
        method: "PUT",
        body: id,
      }),
      invalidatesTags: ["TeamData"],
    }),

    getArchivedTeam: builder.query({
      query: ({ pagination,query }: any) => ({
        url: `/api/team/search/archived?page=1&limit=10${query}`,
        method: "GET",
      }),

      providesTags: ["TeamData"],
    }),

    updateTeamMemeber: builder.mutation({
      query: ({ id,members }: any) => ({
        url: `/api/team/member?id=${id}`,
        method: "PUT",
        body: members,
      }),
      invalidatesTags: ["TeamData"],
    }),

    deleteTeamMemeber: builder.mutation({
      query: ({ id, ids }: { id: string; ids: string }) => ({
        url: `/api/team/member?id=${id}&ids=${ids}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TeamData"],
    }),

    updateTeamProject: builder.mutation({
      query: ({ id,projects }: any) => ({
        url: `/api/team/project?id=${id}`,
        method: "PUT",
        body: projects,
      }),
      invalidatesTags: ["TeamData"],
    }),

    deleteTeamProject: builder.mutation({
      query: ({ id, ids }: { id: string; ids: string }) => ({
        url: `/api/team/project?id=${id}&ids=${ids}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TeamData"],
    }),
  }),
});

export const {
  useGetTeamsQuery,
  useUpdateTeamMutation,
  usePostTeamMutation,
  useDeleteTeamMutation,
  useUpdateActiveTeamMutation,
  useUpdateArchiveTeamMutation,
  useGetArchivedTeamQuery,
  useUpdateTeamMemeberMutation,
  useDeleteTeamMemeberMutation,
  useUpdateTeamProjectMutation,
  useDeleteTeamProjectMutation,
} = ManageTeamsApi;