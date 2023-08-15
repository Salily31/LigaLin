
const puntosPorGol = 0.5 ; 
const puntosPorAsistencia = 0.25 ; 
const puntosPorVictoria = 4 ;

export default class Jugador {
    constructor(jugadorJson){
        this.nombre = jugadorJson.nombre ;
        this.imagen = jugadorJson.imagen ; 
        this.puntos = jugadorJson.puntos;
        this.goles = jugadorJson.goles ; 
        this.asistencias = jugadorJson.asistencias ; 
        this.tiro = jugadorJson.tiro 
        this.pase = jugadorJson.pase 
        this.verticalidad = jugadorJson.verticalidad 
        this.ritmo = jugadorJson.ritmo 
        this.defensa = jugadorJson.defensa 
        this.porteria = jugadorJson.porteria
        this.media = jugadorJson.media;
        this.partidosJugados = jugadorJson.partidosJugados;
        this.partidosGanados = jugadorJson.partidosGanados;
    }

    obtenerMedia(){
        let sumatorioEstadisticas = this.tiro + 
                                this.pase + 
                                this.verticalidad + 
                                this.ritmo + 
                                this.defensa + 
                                this.porteria

        this.media = sumatorioEstadisticas/6 | 0 
    }
    obtenerPuntos(){
        let totalPuntos = this.goles * puntosPorGol; 
        totalPuntos += this.asistencias * puntosPorAsistencia;
        totalPuntos += this.partidosGanados * puntosPorVictoria; 
        this.puntos = totalPuntos
    }
}

