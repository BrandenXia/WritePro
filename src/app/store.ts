import {configureStore} from "@reduxjs/toolkit";
import settingReducer from "../store/SettingSlice.ts";

export const store = configureStore({
    reducer: {
        setting: settingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;