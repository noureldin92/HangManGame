// import { createSlice } from "@reduxjs/toolkit";
// import { categories } from "../wordsSource";

// let categorySlice = createSlice({
//   name: "categorySlice",
//   initialState: { categories, choosen: "" },
//   reducers: {
//     selected(state, action) {
//       let selected = state.categories.find(
//         (ctg) => ctg.category === action.payload
//       );
//       state.choosen =
//         selected.words[Math.floor(Math.random() * selected.words.length)];
//     },
//   },
// });

// export let categoryActions = categorySlice.actions;
// export default categorySlice.reducer;
