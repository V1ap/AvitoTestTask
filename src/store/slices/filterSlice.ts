import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { sorts } from "../../consts/sorts";
import { platforms } from "../../consts/platforms";
import { categories } from "../../consts/categories";

export interface FilterState {
  sort: string;
  platform: string;
  category: string;
}

const initialState: FilterState = {
  sort: sorts[0],
  platform: platforms[0],
  category: categories[0],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortFilter: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setPlatformFilter: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setSortFilter, setPlatformFilter, setCategoryFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
