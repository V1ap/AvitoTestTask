import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./slices/gamesSlice";
import filterReducer from "./slices/filterSlice";
import gameDetailsSlice from "./slices/gameDetailsSlice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    filter: filterReducer,
    gameDetails: gameDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
