import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/modal';
import "../components/styles/MenuProductos.css";
import MenuLista from "../components/MenuLista";
import NavBar from "../components/NavBar";
import Carrusel from "../components/Carrusel";

class MenuPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [
        {
          imagen: "./fotos/DesCruz.jpg",
          nombre: "Desarmador",
          descripcion: "Desarmador de cruz",
          boton: "btn btn-dark",
        },
        {
          imagen: "./fotos/DesCruz.jpg",
          nombre: "Desarmador",
          descripcion: "Desarmador de cruz",
          boton: "btn btn-dark",
        },
        {
          imagen: "./fotos/DesCruz.jpg",
          nombre: "Desarmador",
          descripcion: "Desarmador de cruz",
          boton: "btn btn-dark",
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
        <div className="ProductosTexto">Productos</div>
        <div className="colormy4">
          <hr class="my-4" />
        </div>
        <div>
          <MenuLista productos={this.state.datos} />
        </div>
      </div>
    );
  }
}
export default MenuPrincipal;
