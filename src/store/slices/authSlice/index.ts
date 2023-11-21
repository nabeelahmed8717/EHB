import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: {},
  isAuthenticated: false,
  errorMessage: "",
  resetSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
      console.log(state.errorMessage);
    },
    setResetPasswordSuccess(state, action) {
      state.resetSuccess = action.payload;
    },
  },
});

export const { setErrorMessage,setResetPasswordSuccess } = authSlice.actions;
export default authSlice;
