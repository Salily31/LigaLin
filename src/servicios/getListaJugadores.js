import Jugador from "../clases/Jugador"
import { jugadores } from "../datos/jugadores"
//const url = "https://web-production-d09c.up.railway.app/listaJugadores"

export default function recuperarListaJugadoresApi(opcionOrdenacion){
    
   
    let  listaObjetosJugador = jugadores.map( (jugador) => {
        const objetoJugador = new Jugador(jugador)
        objetoJugador.obtenerMedia()
        objetoJugador.obtenerPuntos()
       return objetoJugador
    })

    ordenarListaObjetosJugadorPorPuntuacion(listaObjetosJugador , opcionOrdenacion)
    return listaObjetosJugador

    /*
    return fetch(url)
    .then(response=>{
        if (response.ok){
            return response.json() 
        }else{
            throw new Error ("Eror al recuperar la lista de jugadores")
            
        }
    })
    .then( data =>{
        const listaObjetos=data.map((datosJugador)=> {

            let jugador = new Jugador(
                                        datosJugador["nombre"],
                                        datosJugador["imagen"],
                                        datosJugador["puntos"],
                                        datosJugador["goles"],
                                        datosJugador["asistencias"],
                                        datosJugador["tiro"],
                                        datosJugador["pase"],
                                        datosJugador["verticalidad"],
                                        datosJugador["ritmo"],
                                        datosJugador["defensa"],
                                        datosJugador["porteria"],
                                        datosJugador["media"],
                                        datosJugador["top"])

            
            return jugador
            
        })

        return listaObjetos
    })

    .catch(error => {
        console.log(error)
    })*/
}

function ordenarListaObjetosJugadorPorPuntuacion(listaObjetosJugadorPorPuntuacion, opcionOrdenacion){

   
    const funcionOrdenacionPorPuntuacion = (a,b) => {
        return  b.puntos - a.puntos
    }

    const funcionOrdenacionPorMedia = (a,b) => {
        return  b.media - a.media
    }

    // 1 : Ordenar por Puntuacion , 2 : ordenar por Media
    opcionOrdenacion === 1 ? listaObjetosJugadorPorPuntuacion.sort(funcionOrdenacionPorPuntuacion) : listaObjetosJugadorPorPuntuacion.sort(funcionOrdenacionPorMedia)
}