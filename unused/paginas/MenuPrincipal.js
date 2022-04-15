import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/modal';
import "../components/styles/MenuPrincipal.css";
import MenuLista from "../components/MenuLista";
import NavBarPrincipal from "../components/NavBarPrincipal";
import Carrusel from "../components/Carrusel";
import axios from "axios";

class MenuPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
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

  // function to get all products
  componentDidMount() {
    axios.get(
        "http://127.0.0.1:8000/api/products/"
    )
        .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(res.data.products);
            // check null

            this.setState({
                products: res.data.products
            });

        })
        .catch(err => {
            console.log(err);
            console.log(err.response);
        });
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
        <div className="MPProductosTxt">
        <h6 className="display-1" >Productos</h6>
        </div>

        <div className="colormy4">
          <hr class="my-4" />
        </div>
        <div>
          <MenuLista productos={this.state.products} />
        </div>
      </div>
    );
  }
}
export default MenuPrincipal;
