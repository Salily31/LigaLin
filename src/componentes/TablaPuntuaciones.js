import {useState,useEffect}  from 'react'
import PuntuacionJugador from './PuntuacionJugador'
import Jugador from '../clases/jugador'
import '../styles/tablaPuntuaciones.css'
import recuperarListaJugadoresApi from '../servicios/getListaJugadores'

export default function TablaPuntuaciones(){

    const  [listaJugadores , setListaJugadores] = useState(null)

    useEffect(()=>{
        recuperarListaJugadoresApi()
            .then(listaJugadoresDevuelta=>{
                listaJugadoresDevuelta.pop()
                setListaJugadores(listaJugadoresDevuelta)
            })
    },[])
    
    
    return(
        <> 
            <div className = "divTextoClasificacion"> CLASIFICACIÓN
            </div>

            <div className = "divCabecera">
                <div className = "divTextoSecciones"> P G A
                </div>
            </div>
            
            {listaJugadores != null  &&(
                <div className= "tablaPuntuaciones">

                    {listaJugadores.map( (jugador,index) => {  
                    
                    let color = index % 2 == 0 ? 0:1  ;
                    return <PuntuacionJugador jugador = {jugador} color = {color} />
                        
                        
                    })}
                    

                </div>
            )}
        </>
    )

}