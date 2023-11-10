import { GlobalApiSlice } from "../../service";

export const timelineAPI = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        timelineGet: builder.query({
            query: ({ pagination }: any) => ({
                url: `/timeline/report?${pagination}`,
                method: "GET",
            }),

            providesTags: ["timeline"],
        }),


    }),
});

export const {
    useTimelineGetQuery,
} = timelineAPI;
