import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/modal";
import "./styles/MenuInicio.css";
import MenuInicio from "./MenuInicio";

function MenuLista(props) {
  return (
      <div>
        {props.productos.map((reporte) => {
          return (
            <MenuInicio
              image={reporte.image}
              name={reporte.name}
              description={reporte.description}
              price={reporte.price}
            />
          );
        })}
      </div>

  );
}
export default MenuLista;
