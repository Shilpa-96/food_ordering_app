import { createSlice } from "@reduxjs/toolkit";

const menuUiSlice = createSlice({
  name: "menuUi",
  initialState: { menuIsVisible: false },

  reducers: {
    toggle(state) {
      state.menuIsVisible = !state.menuIsVisible;
    },
  },
});

export const menuUiActions = menuUiSlice.actions;
export default menuUiSlice;
