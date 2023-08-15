import React from  'react'
import {useState} from 'react'
import "../styles/regla.css"

import getListaJugadores from '../servicios/getListaJugadores'

export default function Regla({titulo,texto}){
    console.log(getListaJugadores())
    const [isDesplegado,setDesplegable] = useState(false)

    const clickDesplegable = ()=>{
        setDesplegable(!isDesplegado)
    } 

    return (
        <>
            <div className = "contenedorCabecera">
                <div className = "contenedorTitulo">
                    {titulo}
                </div>
                <button className = "botonDesplegable" onClick={clickDesplegable}>
                </button>
                

            </div>
            {isDesplegado && ( 

                <div className = "contenedorTexto">
                    <p>{texto}</p>
                </div>
            )}
    </>
    )

}
