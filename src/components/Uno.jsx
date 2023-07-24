import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { guardarMinombre, incrementarPuntuacion } from "../redux/slices";

const Uno = () => {
  const dispatch = useDispatch();
  const miNombreAhora = useSelector((state) => state.unValor.miNombre);
  const miPuntuacionAhora = useSelector((state) => state.otroValor.puntuacion);

  const modificar = () => {
    dispatch(guardarMinombre("Bob Esponja"));
  };

  const incrementar = () => {
    dispatch(incrementarPuntuacion());
  };

  const modificarArray = () => {
    dispatch(incrementarPuntuacion());
  };

  return (
    <>
      <h1>{miNombreAhora}</h1>
      <h1>{miPuntuacionAhora}</h1>
      <button onClick={modificar}>Modificar mi nombre</button>
      <button onClick={incrementar}>Incrementar puntuacion</button>
      <button onClick={modificarArray}>Modificar Array</button>
    </>
  );
};

export default Uno;
