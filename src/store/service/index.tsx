import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDecryptedObject } from "../../utils/utils";


export const TAGS = [
  "User",
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
