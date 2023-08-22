import { configureStore } from "@reduxjs/toolkit";

import pointReducer from "../features/point/pointSlice";

export const store = configureStore({
  reducer: {
    points: pointReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
