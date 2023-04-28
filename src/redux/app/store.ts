import { configureStore } from "@reduxjs/toolkit";
import user from "../features/user";
import logs from '../features/logs'


export const store = configureStore({
  reducer: {
    user,
    logs
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
