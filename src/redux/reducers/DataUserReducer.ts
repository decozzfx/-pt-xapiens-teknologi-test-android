import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialStateUserData } from "./initialState";
import { ILoginResponseData } from "@/types/commonTypes";

const DataUser = createSlice({
  name: "DataUser",
  initialState: initialStateUserData,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<ILoginResponseData["token"]>
    ) => {
      return { ...state, token: action.payload };
    },
  },
});

export const { name, actions, reducer } = DataUser;
