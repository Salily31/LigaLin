import {useState , useEffect} from 'react'
import Jugador from "../clases/Jugador"
import CartaJugador from './CartaJugador'
import '../styles/listaJugadores.css'
import recuperarListaJugadoresApi from '../servicios/getListaJugadores'


function compareRandom(a, b) {
    return Math.random() - 0.5;
}

  
export default function ListaJugadores(){
    const  [listaCartasJugadores , setListaCartasJugadores] = useState(null)

    useEffect(()=>{
        /* Implementation con Api 
        recuperarListaJugadoresApi()
            .then(listaJugadoresDevuelta=>{
                setListaCartasJugadores(listaJugadoresDevuelta)
            })
        */ 
        setListaCartasJugadores(recuperarListaJugadoresApi(2))
    },[])
    

    let paletaColores = ["#ff355e" ,"#fd5b78" ,"#ff6037" ,
                         "#ff9966" ,"#ff9933" ,"#ffcc33" ,
                         "#ffff66" ,"#ccff00" ,"#66ff66" ,
                         "#aaf0d1" ,"#16d0cb","#50bfe6" ,
                         "#9c27b0" ,"#ee34d2" ,"#ff00cc"]  

    paletaColores.sort(compareRandom)

    return (
        <> 
            <div className = "divTextoJugadores"> JUGADORES
            </div>
            {listaCartasJugadores!= null &&( 
            <div className= "listaJugadores">
                {listaCartasJugadores.map((jugador, index )=> {
                    return <CartaJugador jugador = {jugador} color = {paletaColores[index]} />
                })}
            </div>
            )}
        </>
    )
}