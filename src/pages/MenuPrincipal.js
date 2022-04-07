import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/modal';
import "../components/styles/MenuPrincipal.css";
import MenuLista from "../components/MenuLista";
import NavBarPrincipal from "../components/NavBarPrincipal";
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
          price: "$100"
        },
        {
          image: "./fotos/Cable.jpg",
          name: "Cable 12mm",
          description: "Cable...",
          price: "$50"
        },
        {
          image: "./fotos/TijerJar.jpg",
          name: "Tijeras de Jardineria",
          description: "Tijeras para jardineria...",
          price: "$200"
        },
        {
          image: "./fotos/TijerJar.jpg",
          name: "Tijeras de Jardineria",
          description: "Tijeras para jardineria...",
          price: "$200"
        },
        {
          image: "./fotos/TijerJar.jpg",
          name: "Tijeras de Jardineria",
          description: "Tijeras para jardineria...",
          price: "$200"
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div>
          <NavBarPrincipal/>
        </div>
        <div>
          <Carrusel />
        </div>
        <div >Productos</div>
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
