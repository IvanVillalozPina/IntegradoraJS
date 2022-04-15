import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/NoExiste.css";
import NoEncontrado from "../pictures/404.png";

class NoExiste extends React.Component {
  render() {
    return (
      <div>
        <div className="Foto404">
          <img src={NoEncontrado} />
        </div>
        <div className="BotonNE">
            <a href="/" class="btn btn-dark">
              Volver al inicio
            </a>
          </div>
      </div>
    );
  }
}
export default NoExiste;
