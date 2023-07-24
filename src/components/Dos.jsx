import React from 'react'
import { useSelector } from 'react-redux';

const Dos = () => {
    const miNombreAhora = useSelector(state => state.unValor.miNombre)
    const miArrayAhora = useSelector(state => state.unValor.bibliotecas)
    return (
        <div>
            <h1>{ miNombreAhora}</h1>
            {miArrayAhora.map(valor => 
                <div> {valor.nombre} ({valor.inicio})
                </div>
            )}
        </div>
    )
}

export default Dos;
