import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/modal';

import MenuInicio from "./MenuInicio";

function MenuLista(props) {
    return (
        <div className="col-sm col-md col-lg col-xl">
            {props.productos.map((reporte) => {
                return (
                    <MenuInicio
                    image={reporte.image}
                    name={reporte.name}
                    description={reporte.description}
                    />
                )
            })}

        </div>


    )
}
export default MenuLista