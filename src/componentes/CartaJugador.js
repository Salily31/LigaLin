import React from 'react'
import "../styles/cartaJugador.css"



export default function CartaJugador({jugador,color}){
    const colorDiv ={
        backgroundColor : color
    }
    

    
    return(
        
        < div className = "contenedorCarta" style={colorDiv}>
            <div className =" contenedorZonaSuperior">

                <div className="contenedorMedia">
                    {console.log(jugador)}
                    {jugador.media}
                </div>

                <div className = "contenedorImagenCarta" >
                    <   img className = "imagenCarta"
                        src = {process.env.PUBLIC_URL + "content/imagenes/" + "carta" + jugador.imagen}
                        title = {jugador.nombre + "Imagen"}  
                        alt = {"imagen de "  + jugador.nombre}  
                    />

                </div>
            </div>

            <div className = "nombreCarta" >
                {jugador.nombre}
            </div>

            <div className ="contenedorZonaInferior">

                <div className = "seccionIzquierdaCarta">
                    <div className = "atributoCarta" >
                        {jugador.tiro + " TIR"}
                    </div>

                    <div className = "atributoCarta" >
                        {jugador.pase + " PAS"}
                    </div>

                    <div className = "atributoCarta" >
                        {jugador.verticalidad + " VER"}
                    </div>
                </div>
            

                <div className = "seccionDerechaCarta">

                    <div className = "atributoCarta" >
                            {jugador.ritmo + " RIT"}
                    </div>

                    <div className = "atributoCarta" >
                            {jugador.defensa +  " DEF" }
                    </div>

                    <div className = "atributoCarta" >
                            {jugador.porteria + " POR" }
                    </div>
                </div>
            </div>
    
        </div>
    )
}