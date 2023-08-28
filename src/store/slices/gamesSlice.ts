import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import TGame from "../../types/Game";
import pagginationArray from "../../utils/pagginationArray";

export interface GamesState {
  isLoading: boolean;
  data: TGame[][];
  error: { message?: string; status?: number };
}

const initialState: GamesState = {
  isLoading: false,
  data: [],
  error: {},
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    startFetchingGames: (state) => {
      state.isLoading = true;
    },
    setDataGames: (state, action: PayloadAction<TGame[]>) => {
      state.isLoading = false;
      state.error = {};
      state.data = pagginationArray(action.payload);
    },
    setErrorGames: (
      state,
      action: PayloadAction<{ message: string; status: number }>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
      state.data = [];
    },
  },
});

export const { startFetchingGames, setDataGames, setErrorGames } =
  gamesSlice.actions;

export default gamesSlice.reducer;
