import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDecryptedObject } from "../../utils/utils";


export const TAGS = [
  "demo",
  "InviteUser",
  "ManageActiveUser",
  "ManageInactiveUser",
  "ManageDeletedUser",
  "DeletedUser",
  "WorkSchedule",
  "User",
  "workLoadBalance",
  "webappCategories",
  "GetExceptionData",
  "AllDistractionAlert",
  "createService",
  "GetAllValuesForInviteUser",
  "GetSchedulerReport",
  "blocking",
  'CompanySettingsDepartmentApis',
  "CompanySettingsDesignationApis",
  "organizationInformationAPIs",
  "ApplyWorkScheduledAPIs",
  "blocking",
  "ReportsProjectAndTask",
  "ReportsHoursTracked",
  "UserAccount",
  "screenCast",
  "TeamData",
  "SettingActiveProject",
  "ProjectTask",
  "ProjectMember",
  "ProjectTeams"
]
export const GlobalApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: async (headers: Headers) => {
      const userData: any = getDecryptedObject("UserData", "SignInKey");
      if (userData) {
        headers.set('Authorization', `${userData.token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: TAGS,
});
