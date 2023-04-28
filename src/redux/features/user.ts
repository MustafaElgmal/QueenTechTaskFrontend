import {
  getFromStorage,
  resetStorage,
  setToStorage,
} from "./../../constants/storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  token: string;
  isLoggedIn: boolean;
} = getFromStorage("QueenTech");
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      setToStorage("QueenTech", {
        token: state.token,
        isLoggedIn: true,
      });
    },
    resetUser: (state) => {
      state.token = "";
      state.isLoggedIn = false;
      resetStorage("QueenTech");
    },
  },
});
export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
