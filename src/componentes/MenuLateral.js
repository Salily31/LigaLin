import React , {useState,useEffect} from 'react';
import {Link,Router} from 'wouter' ; 
import '../styles/menuLateral.css'


export default function MenuLateral() {
    const body = document.body;
    const [isMenuOpen , setMenuStatus] = useState(false)

    const cambiarEstado = () =>{
        setMenuStatus(!isMenuOpen)
    }
    /*
    useEffect(()=>{
        if(isMenuOpen){
            body.style.overflow = "hidden"
        }else{
            body.style.overflow = "visible"
        }
    },[isMenuOpen])*/
    return (
        <>
            <div>
                <button className='botonMenu' onClick={cambiarEstado}>
                    <img className = "imagenBotonMenu" src={process.env.PUBLIC_URL + "content/imagenes/ball.png" }/>
                </button>
            </div>

            {isMenuOpen && ( 
                <div className = "menuLateral">
                    <div className = "botonera-MenuLateral">
                        <Link to="/" >
                            <div className="divBotonBarraLateral">
                                <button className ="botonBarraLateral">CLASIFICACIÓN </button>
                            </div>
                        </Link>

                        <Link to="/players" >
                            <div className="divBotonBarraLateral">
                                <button className ="botonBarraLateral"> JUGADORES </button>
                            </div>
                        </Link>

                        <Link to="/rules" >
                            <div className="divBotonBarraLateral">
                                <button className ="botonBarraLateral"> REGLAS </button>
                            </div>
                        </Link>
                    </div>
                </div>

            )}
        </>
    )
}