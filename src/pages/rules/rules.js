import React from  'react'
import "../../styles/reglamento.css"
import Regla from '../../componentes/Regla'
import { reglas } from "../../datos/reglas"
export default function Reglamento(){
   
    
    return (
        <> 
            <div className = "divTextoReglamento"> REGLAMENTO
            </div>  

            <div className= "contenedorReglamento">
                {reglas.map(elemento => {
                    return( 
                        <Regla titulo={elemento.titulo} texto={elemento.texto}/>
                    )
                    
                })}
            </div>

        </>
    )





}