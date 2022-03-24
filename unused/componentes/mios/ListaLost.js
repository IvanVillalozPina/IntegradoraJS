import React from "react";
import FichaLost from "./FichaLost";

function ListaLost(props) {
    return (
        <div>
            {props.lostclases.map((reporte) => {
                return (
                    <FichaLost
                    imagen={reporte.imagen}
                    nombre={reporte.nombre}
                    ataque={reporte.ataque}
                    drop={reporte.drop}
                    boton={reporte.boton}
                    />
                )
            })}
        </div>
    )
}
export default ListaLost