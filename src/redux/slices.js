import { createSlice } from "@reduxjs/toolkit";
let unValor;

export const origenSlice = createSlice({
    name: unValor,
    initialState: {miNombre: 'Andy'},
    reducers: {
        guardarMinombre: (state, action) => {
            state.miNombre = action.payload
        }
    }
})

export const { guardarMinombre } = origenSlice.actions