import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import integrationSlice from "./slices/integration";
import { GlobalApiSlice } from "./service";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    integration: integrationSlice.reducer,
    [GlobalApiSlice.reducerPath]: GlobalApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(GlobalApiSlice.middleware),

});
setupListeners(store.dispatch)
export const authActions = authSlice.actions;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
