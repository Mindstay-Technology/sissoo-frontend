// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    fullName: "",
    companyName: "",
    designation: "",
    mobileNumber: "",
    isValidMobileNumber: true,
    showInvalidMobilePopup: false,
    showEmptyMobilePopup: false,
    validotp : "",
  },
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setDesignation: (state, action) => {
      state.designation = action.payload;
    },
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
      state.isValidMobileNumber = action.payload.length === 10;
    },
    setShowInvalidMobilePopup: (state, action) => {
      state.showInvalidMobilePopup = action.payload;
    },
    setShowEmptyMobilePopup: (state, action) => {
      state.showEmptyMobilePopup = action.payload;
    },
    setValidotp: (state, action) => {
      state.validotp = action.payload;
    },
  },
});

export const { setFullName, setCompanyName, setDesignation ,setMobileNumber,   setShowInvalidMobilePopup,   setShowEmptyMobilePopup, setValidotp} =
  authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
