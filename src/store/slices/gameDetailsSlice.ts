import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import TGameDetails from "../../types/GameDetails";

export interface GameDetailsState {
  isLoading: boolean;
  data: TGameDetails | null;
  error: { message?: string; status?: number };
}

const initialState: GameDetailsState = {
  isLoading: false,
  data: null,
  error: {},
};

export const gameDetailsSlice = createSlice({
  name: "gameDetails",
  initialState,
  reducers: {
    startFetchingGameDetails: (state) => {
      state.isLoading = true;
    },
    setDataGameDetails: (state, action: PayloadAction<TGameDetails>) => {
      state.isLoading = false;
      state.error = {};
      state.data = action.payload;
    },
    setErrorGameDetails: (
      state,
      action: PayloadAction<{ message: string; status: number }>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const {
  startFetchingGameDetails,
  setDataGameDetails,
  setErrorGameDetails,
} = gameDetailsSlice.actions;

export default gameDetailsSlice.reducer;
