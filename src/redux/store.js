import { configureStore } from "@reduxjs/toolkit";
import { origenSlice, otroSlice } from "./slices";

export default configureStore({
  reducer: {
    unValor: origenSlice.reducer,
    otroValor: otroSlice.reducer,
  },
});
