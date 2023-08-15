import Jugador from "../clases/jugador"


const url = "https://web-production-d09c.up.railway.app/listaJugadores"

export default function recuperarListaJugadoresApi(){
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
    })
}
