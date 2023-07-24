import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
  name: "unValor",
  initialState: {
    miNombre: "Andy",
    edad: 18,
    bibliotecas: [
      { nombre: "React", inicio: 2013 },
      { nombre: "Redux", inicio: 2015 },
    ],
  },
  reducers: {
    guardarMinombre: (state, action) => {
      state.miNombre = action.payload;
    },
    modificarUnValor: (state, action) => {
      const { indice, nuevoNombre, nuevoInicio } = action.payload;
      state.bibliotecas[indice].nombre = nuevoNombre;
      state.bibliotecas[indice].inicio = nuevoInicio;
    },
    agregarUnValor: (state, action) => {
      const { nuevoNombre, nuevoInicio } = action.payload;
      state.bibliotecas = [
        ...state.bibliotecas,
        {
          nombre: nuevoNombre,
          inicio: nuevoInicio,
        },
      ];
    },
    eliminarUnValor: (state, action) => {
      state.bibliotecas = state.bibliotecas.filter(
        (valor) => valor.nombre !== action.payload,
      );
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

export const {
  guardarMinombre,
  modificarUnValor,
  agregarUnValor,
  eliminarUnValor,
} = origenSlice.actions;
export const { incrementarPuntuacion } = otroSlice.actions;
