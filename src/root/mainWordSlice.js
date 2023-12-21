import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../wordsSource";
import { ctg } from "../wordsSource";
// let word = "MO".toLocaleUpperCase().trim();

let word =
  categories[Math.floor(Math.random() * categories.length)].toUpperCase();

let initialState = {
  array: word.toUpperCase().split(""),
  char: [],
  length: 0,
  ctg: ctg,
};

let mainWordSlice = createSlice({
  name: "mainWord",
  initialState: initialState,
  reducers: {
    charCheck(state, action) {
      state.array.map((char) => {
        if (action.payload.char === char) {
          state.char.push(action.payload);
          state.length = state.length + 1;
        }
        if (state.array.length === state.length) {
          state.char = [];
        }
      });
    },
    PlayAgain(state, action) {
      state.char = [];
      state.length = 0;
      state.array = [...action.payload];
    },
    chooseCtg(state, action) {
      state.length = 0;
      state.char = [];
      let founded = state.ctg.find((sliceCtg) => {
        return sliceCtg.ctg === action.payload;
      });

      state.array = [
        ...founded.items[
          Math.floor(Math.random() * founded.items.length)
        ].toUpperCase(),
      ];
    },
  },
});

export let mainWordActions = mainWordSlice.actions;

export default mainWordSlice.reducer;
