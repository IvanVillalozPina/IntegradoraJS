import React from "react";
import FichaAlumno from "./FichaAlumno";

function Listaalumnos(props) {
    return (
        <div>
            {props.detallealum.map((reporte) => {
                return (
                    <FichaAlumno
                        nomalu={reporte.nomalu}
                        terminofrase={reporte.terminofrase}
                        escribe="Ingresa otra frase"
                        foto={reporte.foto}
                        colorfondo={reporte.colorfondo}
                        tipomen="alert alert-warning"
                    />
                )
            })}

        </div>


    )
}
export default Listaalumnos