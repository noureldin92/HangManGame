/* eslint-disable no-dupe-else-if */
import { createSlice } from "@reduxjs/toolkit";

let gameOverSlice = createSlice({
  name: "gameOver",
  initialState: { attemps: 15, alert: false },
  reducers: {
    wrongTurn(state) {
      state.attemps--;

      if (state.attemps <= 5) {
        state.alert = true;
      }
    },
    reset(state) {
      state.attemps = 15;
      state.alert = false;
    },
  },
});

export let gameOverActions = gameOverSlice.actions;
export default gameOverSlice.reducer;
