import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slicer/counter/counterSlice";
import { pokemonSlice } from "./slicer/pokemon/pokemonSlice";
import { todosApi } from "./api/todosApi";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
