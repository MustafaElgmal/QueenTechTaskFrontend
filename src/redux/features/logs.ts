import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { lines: string[],fileSize:number } = {
  lines: [],
  fileSize:0
};

export const logsSlice=createSlice({
    name:'logs',
    initialState,
    reducers:{
        setAllLogs:(state,action:PayloadAction<{lines:string[],fileSize:number}>)=>{
            state.lines=action.payload.lines
            state.fileSize=action.payload.fileSize
        },
    }
})
export const { setAllLogs } = logsSlice.actions;
export default logsSlice.reducer;
