import {useState , useEffect} from 'react'
import Jugador from "../clases/jugador"
import CartaJugador from './CartaJugador'
import '../styles/listaJugadores.css'
import recuperarListaJugadoresApi from '../servicios/getListaJugadores'


function compareRandom(a, b) {
    return Math.random() - 0.5;
}

  
export default function ListaJugadores(){
    const  [listaCartasJugadores , setListaCartasJugadores] = useState(null)

    useEffect(()=>{
        recuperarListaJugadoresApi()
            .then(listaJugadoresDevuelta=>{
                setListaCartasJugadores(listaJugadoresDevuelta)
            })
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
                    console.log(jugador);
                    return <CartaJugador jugador = {jugador} color = {paletaColores[index]} />
                })}
            </div>
            )}
        </>
    )
}