import React from 'react'
import '../styles/puntuacionJugador.css'

export default function PuntuacionJugador({jugador,color}){
    
    let nombreContenedor = color== 1 ? 'puntuacionJugadorPrimario' : 'puntuacionJugadorSecundario';
    
    return(
        
        < div className = {nombreContenedor} >

            <div className = "topJugador" >
                {jugador.top}
            </div>

            <div className = "contenedorImagenJugador" >
                <   img className = "imagenJugador"
                    src = {process.env.PUBLIC_URL + "content/imagenes/" + "clasificacion" +jugador.imagen}
                    title = {jugador.nombre + "Imagen"}  
                    alt = {"imagen de "  + jugador.nombre}  
                />

            </div>
            <div className = "nombreJugador" >
                {jugador.nombre}
            </div>
            <div className = "conjuntoDatos">
                <div className = "puntosJugador" >
                    {jugador.puntos}
                </div>
                <div className = "golesJugador" >
                    {jugador.goles}
                </div>
                <div className = "asistenciasJugador" >
                    {jugador.asistencias}
                </div>
            </div>


        </div>
    )
}