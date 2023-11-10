import { GlobalApiSlice } from "../../service";

export const dashboardApi = GlobalApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({




        // ================ GET Attendance Summary ================
        getAttendanceSummary: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            // Would be best to provide the attendance tag here
            providesTags: ["dashboardApis"],
        }),




        // ================ GET Productive Hours ================
        getProductiveHours: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            // Would be best to provide the productive hours tags
            providesTags: ["dashboardApis"],
        }),






        // ================ GET Idle Time Hours ================
        getIdleTime: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            // Would be best to provide the Idle Time tags
            providesTags: ["dashboardApis"],
        }),





        // ================ GET Total Time Tracked ================
        getTotalTimeTracked: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            // Would be best to provide the total time tracked tags
            providesTags: ["dashboardApis"],
        }),





        // ================ GET Most Used Services ================
        getMostUsedServices: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            providesTags: ["dashboardApis"],
        }),





        // ================ GET Distraction Alert ================
        getDistractionAlert: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            // Would be best to provide the distraction alert tags
            providesTags: ["dashboardApis"],
        }),





        // ================ GET Work Load Balance ================
        getWorkLoadBalance: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            // Would be best to provide the work load balance tags
            providesTags: ["dashboardApis"],
        }),




        // ================ GET Top Projects ================
        getTopProjects: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            // Would be best to provide the top projects tags
            providesTags: ["dashboardApis"],
        }),



        // ================ GET Employees of the Month ================
        getEmployessOfTheMonth: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            // Would be best to provide the employees of the month tags
            providesTags: ["dashboardApis"],
        }),



        // ================ GET Employees of the Month ================
        getOverallScore: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            // Would be best to provide the overall score tags
            providesTags: ["dashboardApis"],
        }),




        // ================ GET Get Productivity ================
        getProductivity: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            // Would be best to provide the get productivity tags
            providesTags: ["dashboardApis"],
        }),





        // ================ GET Get Idle Minutes ================
        getIdleMinutes: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),

            // Would be best to provide the get idle mnutes tags
            providesTags: ["dashboardApis"],
        }),




    }),
});


export const {
    useGetAttendanceSummaryQuery,
    useGetProductiveHoursQuery,
    useGetIdleTimeQuery,
} = dashboardApi;
