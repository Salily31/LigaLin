import recuperarListaJugadoresApi from "./getListaJugadores"


export default function guardarJugadoresLocal(){
    recuperarListaJugadoresApi()
        .then(listaJugadoresDevuelta=>{
            console.log(listaJugadoresDevuelta)
            
        })
}
