import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuLista from "../components/MenuLista";
import NavBar from "../components/NavBar";
import Carrusel from "../components/Carrusel";

class MenuProductos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [
        {
          imagen: "./fotos/DesCruz.jpg",
          nombre: "Desarmador",
          descripcion: "Desarmador de cruz",
          boton: "btn btn-primary",
        },
        {
          imagen: "./fotos/DesCruz.jpg",
          nombre: "Desarmador",
          descripcion: "Desarmador de cruz",
          boton: "btn btn-primary",
        },
        {
          imagen: "./fotos/DesCruz.jpg",
          nombre: "Desarmador",
          descripcion: "Desarmador de cruz",
          boton: "btn btn-primary",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Carrusel />
        </div>
        <h1>Productos</h1>
        <div>
          <MenuLista productos={this.state.datos} />
        </div>
      </div>
    );
  }
}
export default MenuProductos;
