import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/modal';
import MenuInicio from "./MenuInicio";

function MenuLista(props) {
    return (
        <div>
            {props.productos.map((reporte) => {
                return (
                    <MenuInicio
                    imagen={reporte.imagen}
                    nombre={reporte.nombre}
                    descripcion={reporte.descripcion}
                    boton={reporte.boton}
                    />
                )
            })}

        </div>


    )
}
export default MenuLista