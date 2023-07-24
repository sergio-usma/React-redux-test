import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { guardarMinombre, incrementarPuntuacion, modificarUnValor } from "../redux/slices";

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
    dispatch(modificarUnValor({
        indice:0,
        nuevoNombre: 'React',
        nuevoInicio: 'Mayo de 2013'
    }));
  };

  const agregar = () => {
    dispatch(agregarUnValor({
        nuevoNombre: 'Vue',
        nuevoInicio: 2014
    }))

  }

  const eliminar = () => {
    dispatch(eliminarUnValor('Vue'))
    
  }

  return (
    <>
      <h1>{miNombreAhora}</h1>
      <h1>{miPuntuacionAhora}</h1>
      <button onClick={modificar}>Modificar mi nombre</button>
      <button onClick={incrementar}>Incrementar puntuacion</button>
      <button onClick={modificarArray}>Modificar Array</button>
      <button onClick={agregar}>Agregar un valor</button>
      <button onClick={eliminar}>Eliminar un Valor</button>
    </>
  );
};

export default Uno;
