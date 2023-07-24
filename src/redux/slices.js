import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
  name: "unValor",
  initialState: { miNombre: "Andy" },
  reducers: {
    guardarMinombre: (state, action) => {
      state.miNombre = action.payload;
    },
  },
});

export const otroSlice = createSlice({
  name: "otroValor",
  initialState: { puntuacion: 0 },
  reducers: {
    incrementarPuntuacion: (state) => {
      state.puntuacion = state.puntuacion + 1;
    },
  },
});

export const { guardarMinombre } = origenSlice.actions;
export const { incrementarPuntuacion } = otroSlice.actions;
