import React from "react"
import './estilos/TituloLost.css'

function TituloLost (props)
{
    return(
            <div class="font-weight-light"  id='tituloLOST'>
                LOSTARK
                <div  id="tituloFACCION">
                
                {props.faccion}
                </div>
               
            </div>  
    )
}

export default TituloLost