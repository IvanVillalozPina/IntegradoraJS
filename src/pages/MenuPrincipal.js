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
          image: "./fotos/DesCruz.jpg",
          name: "Desarmador",
          description: "Desarmador de cruz...",
          
        },
        {
          image: "./fotos/Cable.jpg",
          name: "Cable 12mm",
          description: "Cable...",
          
        },
        {
          image: "./fotos/TijerJar.jpg",
          name: "Tijeras de Jardineria",
          description: "Tijeras para jardineria...",
          
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
