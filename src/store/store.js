import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slicer/counter/counterSlice";
import { pokemonSlice } from "./slicer/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
});
