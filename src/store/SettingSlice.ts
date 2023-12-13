import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store.ts";

interface SettingState {
  suggestion: boolean;
}

const initialState: SettingState = {
  suggestion: true,
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    toggleSuggestion: state => {
      state.suggestion = !state.suggestion;
    },
  },
});

export const {toggleSuggestion} = settingSlice.actions;
export const selectSuggestion = (state: RootState) => state.setting.suggestion;
export default settingSlice.reducer;