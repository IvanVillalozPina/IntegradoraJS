import React from "react"
import './estilos/Titulocarrera.css'

function Titulocarrera(props)
{
    return(
        <div id='titulo'>
        Campeones de {props.carrera}
        </div>
    )
}

export default Titulocarrera