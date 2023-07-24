import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { guardarMinombre } from '../redux/slices';

const Uno = () => {
    const dispatch = useDispatch();
    const miNombreAhora = useSelector(state => state.unValor.miNombre)
    
    const modificar = () => {
        dispatch(guardarMinombre('Bob Esponja'))
    } 

    return (
        <>
            <h1>{ miNombreAhora }</h1>
            <button onClick={modificar}>Modificar mi nombre</button>
        </>
    )
}

export default Uno;
