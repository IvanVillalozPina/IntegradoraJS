import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/NavBar.css";
import CasaMontero from "../pictures/CasaMontero.jpg";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <div className="InicioNavBar">
              <div>
                <img className="ImagenMontero" src={CasaMontero} alt='Casa Montero Logo' />
              </div>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="SelectInSs">
              <select
                className="form-select form-select-sm form-select"
                aria-label=".form-select-sm example"
              >
                <option selected>Categorias</option>
                <option value="1">T</option>
                <option value="2">K</option>
                <option value="3">Z</option>
              </select>
            </div>
            <div className="BotonIniciarSesion">
              <a
                href="/InicioSesion"
                className="btn btn-outline-light my-2 my-sm-0"
              >
                <i className="bi bi-person-circle" /> Iniciar Sesión
              </a>
            </div>
            <div>
              <a
                href="/RegistroClientes"
                className="btn btn-outline-light my-2 my-sm-0"
              >
                <i className="bi bi-plus-circle" /> Registrate
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
