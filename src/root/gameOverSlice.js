import { createSlice } from "@reduxjs/toolkit";

let gameOverSlice = createSlice({
  name: "gameOver",
  initialState: { gameOver: false, count: 0, attemps: 15 },
  reducers: {
    wrongTurn(state) {
      state.count++;
      state.attemps--;
      if (state.count === 16) {
        state.gameOver = true;
      }
    },
    reset(state) {
      state.gameOver = false;
      state.count = 0;
      state.attemps = 15;
    },
  },
});

export let gameOverActions = gameOverSlice.actions;
export default gameOverSlice.reducer;
